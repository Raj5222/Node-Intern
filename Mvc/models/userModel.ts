// src/models/userModel.ts
import { Pool } from "pg";
import { hashPassword } from "../hashpassword";

interface User {
  id: number;
  name: string;
  email: string;
  hashedPassword: string;
}

class UserModel {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const hashedPassword = await hashPassword(password);
    const result = await this.pool.query(
      "INSERT INTO employe (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );
    return result.rows[0];
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const result = await this.pool.query(
      "SELECT * FROM employe WHERE email = $1",
      [email]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  }
}

export default UserModel;