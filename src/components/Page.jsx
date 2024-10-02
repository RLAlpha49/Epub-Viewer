import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a page component for displaying EPUB content
 * @param {Object} props - The component props
 /**
  * Removes excess EPUB.js containers from the DOM to optimize performance.
  * This function checks for containers with IDs starting with "epubjs-container" and removes the first and third
  * containers if there are more than three present.
  * @returns {void} This function does not return a value.
  */
 * @param {Object} props.rendition - The EPUB rendition object
 * @param {number} props.pageNumber - The current page number to display
 /**
  * Updates the rendition display when the page number or rendition changes
  * @param {number} pageNumber - The current page number to display
  ```
  /**
   * Displays a specific page of a rendition and removes extra containers afterwards.
   * @param {number} pageNumber - The number of the page to be displayed.
   * @returns {Promise<void>} A promise that resolves when the page is displayed and extra containers are removed.
   */
  ```
  * @param {object} rendition - The rendition object for the e-book
  * @returns {void} This effect does not return a value
  */
 * @returns {JSX.Element} A div element that serves as a container for the EPUB content
 */
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