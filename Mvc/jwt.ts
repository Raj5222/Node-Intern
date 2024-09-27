// src/jwtUtils.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; // Use a strong secret key

export const generateToken = (userId: number): string => { // Generate JWT Token
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
