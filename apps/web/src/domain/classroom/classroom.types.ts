export type ClassroomAccess = "publica" | "privada";
export type ClassroomStatus = "activa" | "archivada";

export type Classroom = {
  id: string;
  name: string;
  description: string;
  institutionId?: string;
  category?: string;
  accessType: ClassroomAccess;
  status: ClassroomStatus;
  createdBy: string;
  teacherIds?: string[];
  createdAt: string;
  updatedAt: string;
};

export type ClassroomListResponse = {
  items: Classroom[];
  limit: number;
  offset: number;
};
