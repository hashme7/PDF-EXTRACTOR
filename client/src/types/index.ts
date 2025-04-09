export interface FileInputProps {
  onFileChange: (file: File | null) => void;
}

export interface PageSelectorProps {
  onPageChange: (pages: string) => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
