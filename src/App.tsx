import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'waveform' | 'oscilloscope'>('waveform');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Multipetal</div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Project</div>
          <div className="nav-item">Instruments</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item">Help</div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Toolbar */}
        <header className="toolbar">
          <button className="toolbar-btn">Play</button>
          <button className="toolbar-btn">Stop</button>
          <button className="toolbar-btn">Record</button>
          <div className="toolbar-spacer"></div>
          <input type="range" className="toolbar-slider" min="0" max="100" defaultValue="50" />
          <span className="toolbar-label">Volume</span>
        </header>

        {/* Middle Section - Waveform and Oscilloscope */}
        <div className="middle-section">
          <div className="display-tabs">
            <button 
              className={`tab-btn ${activeTab === 'waveform' ? 'active' : ''}`}
              onClick={() => setActiveTab('waveform')}
            >
              Waveform
            </button>
            <button 
              className={`tab-btn ${activeTab === 'oscilloscope' ? 'active' : ''}`}
              onClick={() => setActiveTab('oscilloscope')}
            >
              Oscilloscope
            </button>
          </div>
          <div className="display-area">
            {activeTab === 'waveform' && (
              <div className="waveform-display">
                <svg width="100%" height="100%" viewBox="0 0 800 200">
                  <polyline
                    points="0,100 50,80 100,120 150,70 200,130 250,90 300,110 350,75 400,125 450,85 500,115 550,70 600,130 650,95 700,110 750,80 800,100"
                    fill="none"
                    stroke="#00ff00"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
            {activeTab === 'oscilloscope' && (
              <div className="oscilloscope-display">
                <svg width="100%" height="100%" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="150" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                  <circle cx="200" cy="200" r="50" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#00ff00" strokeWidth="1" opacity="0.3" />
                  <polyline
                    points="200,200 210,190 220,200 230,170 240,210 250,180 260,200 270,160 280,220 290,190 300,200"
                    fill="none"
                    stroke="#00ff00"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Piano */}
        <footer className="piano-section">
          <div className="piano-keys">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className={`piano-key ${i % 2 === 0 ? 'white' : 'black'}`}
              ></div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;