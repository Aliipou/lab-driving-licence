import React from 'react';

interface TopNavigationProps {
  onToggleSidebar: () => void;
  onToggleMenu: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ onToggleSidebar, onToggleMenu }) => {
  return (
    <div className="top-nav">
      <div className="top-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          ☰
        </button>
        <div className="centria-logo">CENTRIA</div>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="top-right">
        <div className="icon-button">🌞</div>
        <div className="icon-button">↩️</div>
        <div className="icon-button">🔔</div>
        <div className="icon-button user-menu" onClick={onToggleMenu}>📋</div>
      </div>
    </div>
  );
};

export default TopNavigation;
