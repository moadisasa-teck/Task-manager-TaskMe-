import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Secure only in production
    sameSite: process.env.NODE_ENV === "production" ? "None" : "strict", // Lax for local dev
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
  });
};

export default createJWT;
