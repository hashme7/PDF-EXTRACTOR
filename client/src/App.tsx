import React, { useState } from "react";
import FileInput from "./components/FileInput";
import PageSelector from "./components/PageSelector";
import Button from "./components/Button";
import "./index.css";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPages, setSelectedPages] = useState<string>("");

  const handleCreatePDF = () => {
    if (selectedFile && selectedPages) {
      console.log(
        "Creating PDF with file:",
        selectedFile.name,
        "Pages:",
        selectedPages
      );
      // Add PDF creation logic here
    } else {
      alert("Please select a PDF and specify pages.");
    }
  };

  return (
    <div className="app">
      <h1>Effortlessly Extract PDF Pages</h1>
      <p>
        Select and extract the pages you need from large PDF files online, free
        and easily.
      </p>
      <FileInput onFileChange={setSelectedFile} />
      <PageSelector onPageChange={setSelectedPages} />
      <Button onClick={handleCreatePDF}>Create New PDF</Button>
    </div>
  );
};

export default App;
