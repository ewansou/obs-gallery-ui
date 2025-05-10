import { getAllPhotosViaUploadId } from "@/queries/gallery.query";
import { getAuthCredentials } from "@/lib/auth-utils";
import { redirect } from "next/navigation";
import Gallery from "@/components/gallery";
import GalleryHeader from "@/components/gallery-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HomeButton from "@/components/home-button";

export default async function GalleryPage() {
  // Get user session (via encrypted cookie)
  const uploadId = await getAuthCredentials();

  if (!uploadId) {
    console.warn("[GalleryPage] No valid session, redirecting to login.");
    redirect("/");
  }

  const data = await getAllPhotosViaUploadId(uploadId);

  const isInvalidCourseData =
    !data || !data.courseName || !data.courseDate || !data.groupName;

  if (isInvalidCourseData) {
    console.warn("[GalleryPage] Missing course info, redirecting to login.");
    redirect("/");
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
                <p><strong>Course Name:</strong> {data.courseName}</p>
                <p><strong>Course Date:</strong> {data.courseDate}</p>
                <p><strong>Group Name:</strong> {data.groupName}</p>
              </CardContent>
            </Card>

            <Gallery photos={data.photos} />
          </div>
        </Card>
      </div>
    </main>
  );
}