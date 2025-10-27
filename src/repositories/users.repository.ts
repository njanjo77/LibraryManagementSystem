import { getPool } from "../config/database";
import { User, newUser } from "../types/users.types";

export const getAdmins = async (): Promise<User[]> => {
  try {
    const pool = await getPool();
    const role = 'Admin';
    const result = await pool
      .request()
      .input("role", role)
      .query("SELECT * FROM Users WHERE role = @role");

    return result.recordset;
  } catch (error) {
    console.error("Failed to fetch admins from DB:", error);
    throw error;
  }
};

export const getMembers = async (): Promise<User[]> => {
  try {
    const pool = await getPool();
    const role = 'member';
    const result = await pool
      .request()
      .input("role", role)
      .query("SELECT * FROM Users WHERE role = @role");

    return result.recordset;
  } catch (error) {
    console.error("Failed to fetch members from DB:", error);
    throw error;
  }
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("email", email)
      .query("SELECT * FROM Users WHERE email = @email");

    return result.recordset[0] || null;
  } catch (error) {
    console.error("Failed to fetch user by email:", error);
    throw error;
  }
};

export const getUserById = async (user_id: number): Promise<User | null> => {
  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("user_id", user_id)
      .query("SELECT * FROM Users WHERE user_id = @user_id");

    return result.recordset[0] || null;
  } catch (error) {
    console.error("Failed to fetch user by ID:", error);
    throw error;
  }
};

export const insertUser = async (user: newUser): Promise<void> => {
  try {
    const pool = await getPool();
    await pool
      .request()
      .input("username", user.username)
      .input("email", user.email)
      .input("password_hash", user.password_hash)
      .input("role", user.role)
      .input("date", user.created_at)
      .query(`
        INSERT INTO Users (username, email, password_hash, role, date)
        VALUES (@username, @email, @password_hash, @role, @date)
      `);
  } catch (error) {
    console.error("Failed to insert user:", error);
    throw error;
  }
};

export const deleteUser = async (user_id: number): Promise<void> => {
  try {
    const pool = await getPool();
    await pool
      .request()
      .input("user_id", user_id)
      .query("DELETE FROM Users WHERE user_id = @user_id");
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};
