// Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close Sidebar
      </button>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ranking">League Ranking</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/rules">Rules</Nav.Link>
        <Nav.Link href="/teams">Teams</Nav.Link>
        {/* Add more Nav.Link components for additional menu items */}
      </Nav>
    </div>
  );
};

export default Sidebar;