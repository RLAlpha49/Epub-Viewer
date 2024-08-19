import { useState } from 'react';
import { Button } from "../components/ui/button";

function FileUploader({ onFileSelect }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileSelect(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        accept=".epub"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button asChild>
          <span>Upload EPUB</span>
        </Button>
      </label>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}

export default FileUploader;