// pages/admin.js
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;
  if (session.user.role !== "admin") return <p>Access Denied</p>;

  return <div>Welcome, Admin {session.user.name}</div>;
}
