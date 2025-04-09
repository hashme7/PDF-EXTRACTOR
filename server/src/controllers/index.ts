import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs/promises";

export class Controller {
  constructor() {}
  async uploadPdf(req: Request, res: Response) {
    try {
      console.log("upload call vann");
      console.log(req.file);

      if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const fileId = uuidv4();
      const newPath = path.join(__dirname, "..", "uploads", `${fileId}.pdf`);
      console.log(newPath);
      await fs.rename(req.file.path, newPath);
      res.status(201).json({ fileId });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: "Failed to process upload" });
    }
  }
}
