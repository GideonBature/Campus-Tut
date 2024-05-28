const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");

const generateToken = (user) => {
    const { id, type } = user;
    return jwt.sign({ id, type }, jwt_secret, { expiresIn: "1d" });
};

const verifyToken = (token) => jwt.verify(token, jwt_secret);

module.exports = { generateToken, verifyToken };