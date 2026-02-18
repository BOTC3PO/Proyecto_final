import express from "express";
import path from "path";

export const mapsRouter = express.Router();

const mapsPath = path.join(process.cwd(), "src", "maps", "maps");

mapsRouter.use("/", express.static(mapsPath, {
  etag: true,
  maxAge: "30d"
}));
