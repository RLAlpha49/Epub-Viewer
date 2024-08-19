import { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';
import NavigationButtons from './NavigationButtons.jsx';

function EPUBViewer({ file }) {
  const viewerRef = useRef(null);
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);

  useEffect(() => {
    console.log('EPUBViewer component rendered');
  }, []);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const book = ePub(event.target.result);
        setBook(book);
        const rendition = book.renderTo(viewerRef.current, {
          width: '100%',
          height: '100%',
        });
        setRendition(rendition);
        rendition.display().then(() => {
          const spine = book.spine;
          if (spine && spine.items.length > 1 && spine.items[0].properties.includes('cover-image')) {
            rendition.next();
          }
        });
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  const handleNext = () => {
    if (rendition) {
      rendition.next();
    }
  };

  const handlePrev = () => {
    if (rendition) {
      rendition.prev();
    }
  };

  return (
    <div>
      <div className="epub-container" style={{ width: '100%', height: '80vh', border: '1px solid #ccc', overflow: 'auto' }}>
        <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>
      </div>
      <NavigationButtons onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
}

export default EPUBViewer;