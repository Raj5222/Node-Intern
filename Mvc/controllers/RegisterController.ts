// src/controllers/userController.ts
import { Request, Response } from "express";
import UserModel from "../models/userModel";
import { pool } from "../db";
import { hashPassword } from "../hashpassword";
import { generateToken } from "../jwt";

const userModel = new UserModel(pool);

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password} = req.body;
  try {
    const user = await userModel.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await hashPassword === hashPassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user.id); // Generate a token
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
