import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
          <Link to="/info">Info</Link>
          <Link to="/pcb">PCB</Link>
        </nav>
    </div>
  );
}

export default App;
