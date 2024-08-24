import { useState } from 'react';
import FileUploader from './components/FileUploader';
import EPUBViewer from './components/EPUBViewer';
import './App.css';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

function App() {
  const [file, setFile] = useState(null);
  const [showViewer, setShowViewer] = useState(false);

  const handleShowViewer = () => {
    setShowViewer(true);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <div className="mode-toggle-container">
          <ModeToggle />
        </div>
        <h1>EPUB Viewer</h1>
        <FileUploader onFileSelect={setFile} />
        {file && <button onClick={handleShowViewer}>Show EPUB Viewer</button>}
        {file && showViewer && <EPUBViewer key={file.name} file={file} />}
      </div>
    </ThemeProvider>
  );
}

export default App;