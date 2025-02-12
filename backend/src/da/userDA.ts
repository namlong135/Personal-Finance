import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const findUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: User): Promise<User> => {
  return await prisma.user.create({
    data,
  });
};
