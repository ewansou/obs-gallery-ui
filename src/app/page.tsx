"use client";

import React, { useEffect, useState } from "react";
import Gallery from "@/components/gallery";
import GalleryHeader from "@/components/gallery-header";
import { getAllPhotosViaUploadId } from "@/queries/gallery.query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HomeButton from "@/components/home-button";
import Loading from "@/components/ui/loading";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

const GalleryPage = () => {
  const [data, setData] = useState<PhotosListType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getAllPhotosViaUploadId()
      .then((result) => {
        console.log("[GalleryPage] Result from getAllPhotosViaUploadId:", result);
  
        const isInvalidCourseData =
          !result || !result.courseName || !result.courseDate || !result.groupName;
  
        if (isInvalidCourseData) {
          console.warn("[GalleryPage] Missing course info. Redirecting to login.");
  
          fetch("/api/logout", {
            method: "GET",
            credentials: "include",
          }).then(() => {
            router.replace(ROUTES.LOGIN);
          });
  
          return;
        }
  
        setData(result);
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <main className="w-screen min-h-screen flex items-center justify-center bg-neutral-100">
        <Loading />
      </main>
    );
  }

  return (
    <main className="w-screen min-h-screen bg-neutral-100">
      <GalleryHeader />

      <div className="container pt-40 pb-20">
        <Card className="w-full border border-neutral-200 shadow-md p-8">
          <div className="flex flex-col gap-10">
            <HomeButton />

            <Card className="border border-neutral-200 shadow-sm">
              <CardHeader>
                <h2 className="text-xl font-semibold">Course Information</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 text-sm md:text-base">
                <p><strong>Course Name:</strong> {data?.courseName}</p>
                <p><strong>Course Date:</strong> {data?.courseDate}</p>
                <p><strong>Group Name:</strong> {data?.groupName}</p>
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