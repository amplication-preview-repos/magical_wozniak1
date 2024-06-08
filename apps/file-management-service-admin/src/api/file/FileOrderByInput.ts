import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  fileType?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
  userId?: SortOrder;
};
