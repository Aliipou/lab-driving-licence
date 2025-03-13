import React from 'react';
import { Link } from 'react-router-dom';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`left-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-section">
        <div className="sidebar-header">
          <span>Favorites</span>
          <span>Recently</span>
        </div>
        <Link to="/" className="menu-item">
          <span className="dot"></span>
          <span>Overview</span>
        </Link>
        <Link to="/activity" className="menu-item">
          <span className="dot"></span>
          <span>Activity</span>
        </Link>
      </div>
      
      <div className="sidebar-title">Student</div>
      <div className="sidebar-section" style={{ paddingTop: 0 }}>
        <Link to="/profile" className="menu-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>User Profile</span>
        </Link>
        <Link to="/account" className="menu-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Account</span>
        </Link>
      </div>

      <div className="sidebar-title">Device Guidance Access</div>
      <div className="sidebar-section" style={{ paddingTop: 0 }}>
        <Link to="/safety" className="menu-item menu-item-selected">
          <span>Safety Guidelines Access</span>
          <div className="menu-item-checkmark">✓</div>
        </Link>
        <Link to="/testing" className="menu-item menu-item-selected">
          <span>Knowledge Testing</span>
          <div className="menu-item-checkmark">✓</div>
        </Link>
        <Link to="/badges" className="menu-item menu-item-selected">
          <span>Badges</span>
          <div className="menu-item-checkmark">✓</div>
        </Link>
        <Link to="/lab-guidance" className="menu-item menu-item-selected">
          <span>Lab Specific Guidance</span>
          <div className="menu-item-checkmark">✓</div>
        </Link>
      </div>
      
      <button className="close-sidebar-btn" onClick={onClose}>×</button>
    </div>
  );
};

export default LeftSidebar;
