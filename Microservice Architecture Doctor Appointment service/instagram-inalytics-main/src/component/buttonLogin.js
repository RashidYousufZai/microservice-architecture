import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div>
      <button onClick={() => signIn("instagram")}>Login with Instagram</button>
    </div>
  );
}
