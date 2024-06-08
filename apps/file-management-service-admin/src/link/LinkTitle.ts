import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "linkUrl";

export const LinkTitle = (record: TLink): string => {
  return record.linkUrl?.toString() || String(record.id);
};
