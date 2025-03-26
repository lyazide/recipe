// src/app/users/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  console.log("session");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>TopBar</div>
      {children}
    </div>
  );
}
