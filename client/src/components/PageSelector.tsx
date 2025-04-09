import React from "react";

interface PageSelectorProps {
  onPageChange: (pages: string) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({ onPageChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPageChange(event.target.value);
  };

  return (
    <div className="page-selector">
      <label>Select Pages:</label>
      <input type="text" placeholder="e.g., 1-3, 5" onChange={handleChange} />
    </div>
  );
};

export default PageSelector;
