// components/LogoutButton.jsx

"use client";

import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Se déconnecter
    </Button>
  );
}
