import { Document } from "mongodb";
import { connectToDatabase } from "./database/db";
import User from "./database/models/User";
import { User as UserType } from "@/types";

export async function createUser(userData: UserType) {
  try {
    await connectToDatabase();
    const newUser: Document = await User.create(userData);
    return newUser;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

export async function updateUser(userData: UserType) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userData.clerkId },
      { userData },
      { new: true }
    );
    return updatedUser;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const updatedUser = await User.findOneAndDelete({ clerkId });
    return updatedUser;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
