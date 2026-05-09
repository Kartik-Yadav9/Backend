const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  console.log("Auth middleware called for:", req.path);
  console.log("Cookies:", req.cookies);

  try {
    const token = req.cookies.token;

    if (!token) {
      console.log("No token found - returning 401");
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret",
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = authenticate;
