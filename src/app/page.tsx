import React from "react";
import { Metadata } from "next";
import Gallery from "@/components/gallery";
import GalleryHeader from "@/components/gallery-header";
import { getAllPhotosViaUploadId } from "@/queries/gallery.query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HomeButton from "@/components/home-button"; 

export const metadata: Metadata = {
  title: "Gallery | Outward Bound Singapore",
};

const GalleryPage = async () => {
  const data = await getAllPhotosViaUploadId();

  return (
    <main className="w-screen min-h-screen bg-neutral-100">
      <GalleryHeader />

      <div className="container pt-40 pb-20">
        {/* Wrapper Card */}
        <Card className="w-full border border-neutral-200 shadow-md p-8">
          <div className="flex flex-col gap-10">
            <HomeButton />

            <Card className="border border-neutral-200 shadow-sm">
              <CardHeader>
                <h2 className="text-xl font-semibold">Course Information</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 text-sm md:text-base">
                <p>
                  <strong>Course Name:</strong> {data?.courseName}
                </p>
                <p>
                  <strong>Course Date:</strong> {data?.courseDate}
                </p>
                <p>
                  <strong>Group Name:</strong> {data?.groupName}
                </p>
              </CardContent>
            </Card>

            <Gallery photos={data?.photos} />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default GalleryPage;