import React, { useState } from "react";
import axios from "axios";

interface FileInputProps {
  onFileChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onFileChange(file);
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file); 

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload success:", response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="file-input">
      <label>Select PDF:</label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <span>{fileName || "No file chosen"}</span>
    </div>
  );
};

export default FileInput;
