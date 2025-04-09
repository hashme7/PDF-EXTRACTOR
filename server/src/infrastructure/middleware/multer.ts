import multer from "multer";
import path from "path";
import { storageConfig } from "../../infrastructure/config/storage";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storageConfig.UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: storageConfig.MAX_FILE_SIZE },
  fileFilter: (req, file, cb: multer.FileFilterCallback) => {
    if (storageConfig.ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"));
    }
  },
});
