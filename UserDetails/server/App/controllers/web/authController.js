const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthUserModel = require("../../models/AuthUserModel");

//Register user

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validate
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check if user exist
    const existingUser = await AuthUserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12); //12 means hashing complexity, salt means adding string to pswd
    const hashedPassword = await bcrypt.hash(password, salt); //This is what gets stored in the database.

    // Create user
    const user = new AuthUserModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "fallback-secret",
      { expiresIn: "25m" },
    );

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 25 * 60 * 1000, // 25 min 
      path: "/",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await AuthUserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT =hbGciOiJIUzI1NiIs......
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "fallback-secret",
      { expiresIn: "7d" },
    );

    // Set HTTP-only cookie ,Send a cookie named token to the browser and store the JWT token inside it.
    //important thing here is you do NOT store this cookie manually in the frontend. The browser stores it automatically when the backend sends it.
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: "/",
    });

    res.json({
      success: true,
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// Logout user
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  res.json({
    success: true,
    message: "Logout successful",
  });
};

// Get current user (from cookie JWT)
const me = async (req, res) => {
  try {
    const user = await AuthUserModel.findById(req.user?.userId).select(
      "_id name email",
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { register, login, logout, me };
