import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { API_ENDPOINTS } from "./api-endpoints";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownload = async (file: PhotoType) => {
  const fileName = file.fileName;
  try {
    const res = await fetch(API_ENDPOINTS.DOWNLOAD, {
      method: "POST",
      body: JSON.stringify({ ...file, fileName }),
    });
    const url = window.URL.createObjectURL(new Blob([await res.blob()]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // Specify the name of the file to download
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    link.parentNode?.removeChild(link);
  } catch (err) {
    console.error(err);
  }
};
