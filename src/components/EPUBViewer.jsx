import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import NavigationButtons from './NavigationButtons.jsx';
import ePub from 'epubjs';

/**
 * EPUBViewer component for rendering and navigating EPUB files
 * @param {File} file - The EPUB file to be displayed
 * @returns {JSX.Element} A component that displays two pages of the EPUB file side by side with navigation buttons
 */
function EPUBViewer({ file }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);

  useEffect(() => {
    if (file && !book) {
      const reader = new FileReader();
      /**
       * Handles the file reader's load event for an EPUB file
       * @param {Event} event - The load event from the FileReader
       * @returns {void} This function doesn't return a value
       */
      reader.onload = (event) => {
        const newBook = ePub(event.target.result);
        setBook(newBook);
        const newRendition = newBook.renderTo(document.createElement('div'), {
          width: '100%',
          height: '100%',
        });
        setRendition(newRendition);
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file, book]);

  /**
   * Increments the current page number by 2.
   * @returns {void} This function doesn't return a value.
   */
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 2);
  };

  /**
   * Decrements the current page number by 2, ensuring it doesn't go below 1.
   * @returns {void} This function doesn't return a value.
   */
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 2, 1));
  };

  return (
    <div>
      <div className="epub-container" style={{ width: '100%', height: '80vh', border: '1px solid #ccc', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', height: '100%' }}>
          <Page key={`page-${currentPage}`} book={book} rendition={rendition} pageNumber={currentPage} />
        </div>
        <div style={{ width: '50%', height: '100%' }}>
          <Page key={`page-${currentPage + 1}`} book={book} rendition={rendition} pageNumber={currentPage + 1} />
        </div>
      </div>
      <NavigationButtons onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
}

EPUBViewer.propTypes = {
  file: PropTypes.object.isRequired,
};

export default EPUBViewer;