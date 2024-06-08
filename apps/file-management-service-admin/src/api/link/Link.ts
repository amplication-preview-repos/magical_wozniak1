import { File } from "../file/File";

export type Link = {
  createdAt: Date;
  expiryDate: Date | null;
  file?: File | null;
  id: string;
  isActive: boolean | null;
  linkUrl: string | null;
  updatedAt: Date;
};
