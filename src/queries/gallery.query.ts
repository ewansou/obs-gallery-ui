import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { getAuthCredentials } from "@/lib/auth-utils";
import { BASE_URL, revalidate } from "@/lib/constants";

export const getAllPhotosViaUploadId = async (): Promise<
  PhotosListType | undefined
> => {
  try {
    const uploadId = await getAuthCredentials();

    const response = await fetch(
      BASE_URL + API_ENDPOINTS.GET_ALL_PHOTOS + `?uploadid=${uploadId}`,
      {
        next: { revalidate },
      }
    );

    const data = await response.json();

    console.log("------------ data -------------", data);

    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};
