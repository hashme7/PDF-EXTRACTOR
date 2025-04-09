import express, { Response } from "express";
import dotenv from "dotenv";
import router from "./infrastructure/routes";
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
  })
);


app.use("/api", router);

app.get("/", (_, res: Response) => {
  res.send("PDF Extractor API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
