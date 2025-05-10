"use server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const setAuthCredentials = async (uploadId: string) => {
  // Save the session in a cookie
  const COOKIES = await cookies();
  COOKIES.set("session", uploadId, { httpOnly: true });
};

export const getAuthCredentials = async (
  request?: NextRequest
): Promise<string | undefined> => {
  try {
    const COOKIES = await cookies();

    const session = request
      ? request.cookies.get("session")?.value
      : COOKIES.get("session")?.value;

    return session;
  } catch (err) {
    console.error(err);
    return;
  }
};