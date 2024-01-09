import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        Close Sidebar
      </button>
      <Nav defaultActiveKey="/" className="flex-column">
        <Link to="/" className="nav-link" onClick={onClose}>
          Home
        </Link>
        <Link to="/ranking" className="nav-link" onClick={onClose}>
          League Ranking
        </Link>
        <Link to="/matches" className="nav-link" onClick={onClose}>
          Matches
        </Link>
        <Link to="/rules" className="nav-link" onClick={onClose}>
          Rules
        </Link>
        <Link to="/teams" className="nav-link" onClick={onClose}>
          Teams
        </Link>
        <Link to="/player-statistics" className="nav-link" onClick={onClose}>
          Player Statistics
        </Link>
        <Link to="/schedule" className="nav-link" onClick={onClose}>
          Schedule
        </Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
