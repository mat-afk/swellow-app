import jwt from "jsonwebtoken";

const COOKIE_MAX_AGE_IN_DAYS = 15;
const COOKIE_MAX_AGE_IN_MILISECONDS =
  COOKIE_MAX_AGE_IN_DAYS * 24 * 60 * 60 * 1000;

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: COOKIE_MAX_AGE_IN_MILISECONDS,
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookies;
