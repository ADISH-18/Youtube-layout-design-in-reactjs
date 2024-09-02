import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import videos from './data/Video';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}

export default App;
