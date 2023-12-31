import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "64eeaa95671f13cbb1d6",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;