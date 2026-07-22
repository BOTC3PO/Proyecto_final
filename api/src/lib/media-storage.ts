/**
 * Backend de storage para /api/media — "local" (disco, default) o "s3"
 * (cualquier endpoint S3-compatible). Ver tareas_pendientes/
 * PLAN-escalabilidad-api.md: con 2+ instancias del API, un archivo
 * subido a disco de una instancia no existe en las demás.
 */
import { promises as fs } from "fs";
import path from "path";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { ENV } from "./env";

const LOCAL_ROOT = path.resolve(__dirname, "../../media");

let s3Client: S3Client | null = null;
const getS3Client = (): S3Client => {
  if (!s3Client) {
    s3Client = new S3Client({
      region: ENV.MEDIA_S3_REGION,
      endpoint: ENV.MEDIA_S3_ENDPOINT || undefined,
      credentials: {
        accessKeyId: ENV.MEDIA_S3_ACCESS_KEY_ID,
        secretAccessKey: ENV.MEDIA_S3_SECRET_ACCESS_KEY,
      },
    });
  }
  return s3Client;
};

const streamToBuffer = async (stream: NodeJS.ReadableStream): Promise<Buffer> => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
};

export const putMedia = async (name: string, buf: Buffer): Promise<void> => {
  if (ENV.MEDIA_STORAGE === "s3") {
    await getS3Client().send(
      new PutObjectCommand({ Bucket: ENV.MEDIA_S3_BUCKET, Key: name, Body: buf }),
    );
    return;
  }
  await fs.mkdir(LOCAL_ROOT, { recursive: true });
  await fs.writeFile(path.resolve(LOCAL_ROOT, name), buf);
};

/** Devuelve el contenido, o `null` si no existe. */
export const getMedia = async (name: string): Promise<Buffer | null> => {
  if (ENV.MEDIA_STORAGE === "s3") {
    try {
      const result = await getS3Client().send(
        new GetObjectCommand({ Bucket: ENV.MEDIA_S3_BUCKET, Key: name }),
      );
      if (!result.Body) return null;
      return await streamToBuffer(result.Body as NodeJS.ReadableStream);
    } catch {
      return null;
    }
  }
  try {
    return await fs.readFile(path.resolve(LOCAL_ROOT, name));
  } catch {
    return null;
  }
};

/** URL pública directa al archivo (evita proxyear por el API), o `null` si no aplica. */
export const mediaPublicUrl = (name: string): string | null => {
  if (ENV.MEDIA_STORAGE === "s3" && ENV.MEDIA_S3_PUBLIC_URL) {
    return `${ENV.MEDIA_S3_PUBLIC_URL.replace(/\/$/, "")}/${name}`;
  }
  return null;
};
