import { NextResponse } from "next/server";

export const COOKIE_MAX_AGE = 8;

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: COOKIE_MAX_AGE * 3600,
  path: "/",
  sameSite: (process.env.NODE_ENV === "production" ? "strict" : "lax") as
    | "strict"
    | "lax",
};

interface CookieDeleteOptions {
  name: string;
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const deleteCookies = (
  response: NextResponse,
  cookiesToDelete: CookieDeleteOptions[]
): NextResponse => {
  cookiesToDelete.forEach((cookie) => {
    response.cookies.delete({
      name: cookie.name,
      path: cookie.path ?? "/",
      httpOnly: cookie.httpOnly ?? true,
      secure: cookie.secure ?? process.env.NODE_ENV === "production",
      sameSite: cookie.sameSite ?? "strict",
    });
  });

  return response;
};
