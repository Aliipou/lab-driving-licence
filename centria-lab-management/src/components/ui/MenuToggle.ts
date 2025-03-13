import React from 'react';

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick, className = '' }) => {
  return (
    <button 
      className={`menu-toggle ${className}`} 
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? '×' : '☰'}
    </button>
  );
};

export default MenuToggle;
