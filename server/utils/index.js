import jwt from "jsonwebtoken";

const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Required for SameSite=None
    sameSite: "None", // Allow cross-site cookie
    maxAge: 24 * 60 * 60 * 1000, // Example: 1 day
  });
};

export default createJWT;
