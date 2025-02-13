import { UserStatus, UserType } from "@prisma/client";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: UserStatus;
  type: UserType;
  createdAt: string;
}