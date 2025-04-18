"use server";

import { ROUTES } from "@/lib/routes";
import { BASE_URL } from "@/lib/constants";
import { redirect } from "next/navigation";
import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { setAuthCredentials } from "@/lib/auth-utils";

export const login = async (uploadId: string): Promise<ApiResponseType> => {
  try {
    const response = await fetch(
      BASE_URL + API_ENDPOINTS.LOGIN + `?uploadid=${uploadId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    console.log("-------- data ---------", data);

    if (!response.ok) return data;

    await setAuthCredentials(uploadId);
  } catch (err) {
    console.error("---------- Login Error -------------", err);
    return { error: "Something went wrong..." };
  }
  redirect(ROUTES.HOME);
};
