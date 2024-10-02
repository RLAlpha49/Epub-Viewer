import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "./ui/button.jsx";

/**
 * FileUploader component for handling file selection and upload
 * @param {function} onFileSelect - Callback function to be called when a file is selected
 * @returns {JSX.Element} A file upload input with a custom styled button and file name display
 */
function FileUploader({ onFileSelect }) {
  const [file, setFile] = useState(null);

  /**
   * Handles the file change event when a user selects a file.
   * @param {Event} event - The file input change event object.
   * @returns {void} This function doesn't return a value.
   */
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

FileUploader.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileUploader;