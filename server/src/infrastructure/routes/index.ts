import express from "express";
import { controllerInstance } from "../../provider/controller";
import { upload } from "../middleware/multer";
const router = express.Router();

router
  .route("/upload")
  .post(upload.single("file"), controllerInstance.uploadPdf);

export default router;
