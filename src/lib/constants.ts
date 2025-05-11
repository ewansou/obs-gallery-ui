export const AUTH_CRED = "session";

export const revalidate = 30;

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL!
    : "https://server.highlightsfromyourevent.com/instantly-obs-webapp-service/api";
