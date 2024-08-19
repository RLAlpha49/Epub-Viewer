import { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import EPUBViewer from './components/EPUBViewer';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [showViewer, setShowViewer] = useState(false);

  useEffect(() => {
    console.log('App component rendered');
  });

  useEffect(() => {
    if (file) {
      console.log('EPUBViewer is being rendered');
    }
  }, [file]);

  const handleShowViewer = () => {
    setShowViewer(true);
  };

  useEffect(() => {
    if (showViewer) {
      // Check for all epub-container elements and keep the last one
      const containers = document.querySelectorAll('.epub-container');
      console.log(containers)
      containers.forEach((container, index) => {
        if (index < containers.length - 1) {
          container.remove();
        }
      });
    }
  }, [showViewer]);

  return (
    <div className="App">
      <h1>EPUB Viewer</h1>
      <FileUploader onFileSelect={setFile} />
      {file && <button onClick={handleShowViewer}>Show EPUB Viewer</button>}
      {file && showViewer && <EPUBViewer key={file.name} file={file} />}
    </div>
  );
}

export default App;