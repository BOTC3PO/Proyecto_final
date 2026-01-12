import { ObjectId } from "mongodb";

export const toObjectId = (value: string) => {
  try {
    return new ObjectId(value);
  } catch {
    return null;
  }
};
