import { fetchAllUsers, fetchUserById } from "../../service";
import { createUser } from "../../da";
import { User } from "@prisma/client";

export const userResolvers = {
  Query: {
    users: async () => {
      return await fetchAllUsers();
    },
    user: async (_: any, args: { id: string }) => {
      return await fetchUserById(args.id);
    },
  },
  Mutation: {
    createUser: async (_: any, args: User) => {
      return await createUser(args);
    },
  },
};
