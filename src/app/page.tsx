import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/gallery";
import GalleryHeader from "@/components/gallery-header";
import { getAllPhotosViaUploadId } from "@/queries/gallery.query";

export const metadata: Metadata = {
  title: "Gallery | Outward Bound Singapore",
};

const GalleryPage = async () => {
  const data = await getAllPhotosViaUploadId();

  return (
    <main className="w-screen h-screen">
      <div className="container bg-white border border-neutral-100 rounded-2xl py-20">
        <GalleryHeader />
        <div className="w-full mt-52 h-full">
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
      </div>
    </main>
  );
};

export default GalleryPage;
