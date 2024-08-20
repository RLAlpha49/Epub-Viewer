import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Page({ rendition, pageNumber }) {
  const viewerRef = useRef(null);

  const removeExtraContainers = () => {
    const containers = document.querySelectorAll('div[id^="epubjs-container"]');
    if (containers.length > 3) {
      containers[0].remove();
      containers[2].remove();
    }
  };

  useEffect(() => {
    if (rendition) {
      rendition.attachTo(viewerRef.current);
      rendition.display(pageNumber).then(() => {
        removeExtraContainers();
      });
    }
  }, [pageNumber, rendition]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>;
}

Page.propTypes = {
  rendition: PropTypes.object,
  pageNumber: PropTypes.number.isRequired,
};

export default Page;