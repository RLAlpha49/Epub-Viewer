import { useState } from 'react';
import FileUploader from './components/FileUploader';
import EPUBViewer from './components/EPUBViewer';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [showViewer, setShowViewer] = useState(false);

  const handleShowViewer = () => {
    setShowViewer(true);
  };

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