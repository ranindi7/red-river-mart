import { useUser, useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { getUserById } from "../apis/userRepo";
import { User } from "@shared/types/types";

export function getCurrentUser() {
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();

  const [dbUser, setDbUser] = useState<User>();

  useEffect(() => {
    if (!isSignedIn) return;

    const load = async () => {
      const token = await getToken();
      const backendUser = await getUserById(user.id, token);
      setDbUser(backendUser);
    };

    load();
  }, [isSignedIn, user, getToken]);

  return { dbUser, setDbUser, isSignedIn, getToken };
}