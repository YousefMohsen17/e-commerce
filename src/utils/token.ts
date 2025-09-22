"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {
  const sessionCookie = (await cookies()).get("next-auth.session-token");
  if (!sessionCookie) return null;
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not set");

  const token = await decode({
    token: sessionCookie.value,
    secret,
  });
  return token?.token;
}
