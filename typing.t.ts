type ApiResponseType =
  | { success: string; error?: undefined }
  | { error: string; success?: undefined };

export interface PhotoType {
  fileName: string;
  publicUrl: string;
}

export interface PhotosListType {
  userName: string;
  userEmail: string;
  courseName: string;
  courseDate: string;
  groupName: string;
  galleryPassword: string;
  photoSelected: string;
  photos: Array<PhotoType>;
  currentPage: number;
  totalPages: number;
  totalElements: number;
  lastPage: boolean;
}
