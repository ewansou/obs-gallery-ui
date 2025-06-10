 type ApiResponseType =
  | { success: string; error?: undefined }
  | { error: string; success?: undefined };

 interface PhotoType {
  fileName: string;
  publicUrl: string;
}

 interface PhotosListType {
  userName: string;
  userEmail: string;
  courseName: string;
  courseDate: string;
  campus: string;
  groupName: string;
  galleryPassword: string;
  galleryExpiryDate: string;
  photoSelected: string;
  photos: Array<PhotoType>;
  currentPage: number;
  totalPages: number;
  totalElements: number;
  lastPage: boolean;
}
