import fs from "fs";
import path from "path";

/**
 * Saves an uploaded file to /public/images and returns the public path
 * @param file File object from FormData
 * @param folder Optional subfolder under /public/images
 * @returns string - path to the saved file, e.g., /images/filename.jpg
 */

export async function saveFile(file: File, folder = ""): Promise<string> {
  if (!file) throw new Error("No file provided");

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadDir = path.join(process.cwd(), "public", "images", folder);

  fs.mkdirSync(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.name);
  fs.writeFileSync(filePath, buffer);

  const publicPath = `/images${folder ? `/${folder}` : ""}/${file.name}`;
  return publicPath;
}
