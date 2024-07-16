// pages/user.js
import { useSession } from "next-auth/react";

export default function UserPage() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;
  if (session.user.role !== "user") return <p>Access Denied</p>;

  return <div>Welcome, User {session.user.name}</div>;
}
