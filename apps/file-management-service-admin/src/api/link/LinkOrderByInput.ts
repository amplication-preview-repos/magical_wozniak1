import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  linkUrl?: SortOrder;
  updatedAt?: SortOrder;
};
