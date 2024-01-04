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
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/ranking" className="nav-link">
          League Ranking
        </Link>
        <Link to="/matches" className="nav-link">
          Matches
        </Link>
        <Link to="/rules" className="nav-link">
          Rules
        </Link>
        <Link to="/teams" className="nav-link">
          Teams
        </Link>
        <Link to="/player-statistics" className="nav-link">
          Player Statistics
        </Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
