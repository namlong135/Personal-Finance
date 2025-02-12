import { User } from "@prisma/client";
import { getAllUsers, findUserById } from "../da";

export const fetchAllUsers = async (): Promise<User[]> => {
  return await getAllUsers();
};

export const fetchUserById = async (id: string): Promise<User | null> => {
  return await findUserById(id);
};
