import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/gallery";
import { getAllPhotosViaUploadId } from "@/queries/gallery.query";

export const metadata: Metadata = {
  title: "Gallery | Outward Bound Singapore",
};

const GalleryPage = async () => {
  const data = await getAllPhotosViaUploadId();

  return (
    <main className="w-screen h-screen">
      <div className="container max-h-screen overflow-y-scroll bg-white border border-neutral-100 rounded-2xl py-20">
        <div className="flex flex-col gap-5 mb-10 ">
          <p>
            <strong>Course Name: </strong> {data?.courseName}
          </p>
          <p>
            <strong>Course Date: </strong> {data?.courseDate}
          </p>
          <p>
            <strong>Group Name: </strong> {data?.groupName}
          </p>
        </div>
        <Gallery photos={data?.photos} />
      </div>
    </main>
  );
};

export default GalleryPage;
