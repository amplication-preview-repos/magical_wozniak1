import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "displayName";

export const ProfileTitle = (record: TProfile): string => {
  return record.displayName?.toString() || String(record.id);
};
