const jwt = require('jsonwebtoken');
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "Access Denied, No token provided" });

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVarified.email }).select({ password: 0 });

    req.user = userData;
    req.token = token;
    req.userID = userData.id;

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = authMiddleware;
