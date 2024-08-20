import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from './Page.jsx';
import NavigationButtons from './NavigationButtons.jsx';
import ePub from 'epubjs';

function EPUBViewer({ file }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);

  useEffect(() => {
    if (file && !book) {
      const reader = new FileReader();
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

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 2);
  };

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