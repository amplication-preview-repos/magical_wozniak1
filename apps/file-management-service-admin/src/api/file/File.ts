import { Link } from "../link/Link";
import { User } from "../user/User";

export type File = {
  createdAt: Date;
  filename: string | null;
  fileType: string | null;
  fileUrl: string | null;
  id: string;
  links?: Array<Link>;
  updatedAt: Date;
  uploadedAt: Date | null;
  user?: User | null;
};
