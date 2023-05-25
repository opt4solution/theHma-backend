const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  try{
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
      if (err) {
        res.status(400);
        throw new Error("User is not authorized");
      }
      // console.log("decoded : ", decoded );
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing.");
    }
  }
}
catch(err){
  res.status(400).json({ message : err.message })
}
});

module.exports = validateToken;
