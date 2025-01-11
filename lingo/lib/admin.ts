import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "add your own admin ids"
]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false
  }

  return adminIds.indexOf(userId) !== -1
};


