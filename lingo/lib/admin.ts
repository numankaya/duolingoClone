import { auth } from "@clerk/nextjs/server";

const adminIds = [
    "user_2o6v9UvYvOMUxtwvsB2o0PJbczf",
    "user_2okjO8jHEfhWTvDrarx2ebJQ93D"
]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false
  }

  return adminIds.indexOf(userId) !== -1
};


