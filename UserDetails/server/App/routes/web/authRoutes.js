const express = require("express");
const authRoutes = express.Router();
const { register, login, logout, me } = require("../../controllers/web/authController");
const authenticate = require("../../middleware/authMiddleware");

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/me", authenticate, me);

module.exports = authRoutes;
