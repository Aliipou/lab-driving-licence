import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import UserProfile from '../../pages/UserProfile';
import SafetyGuidelines from '../../pages/SafetyGuidelines';
import KnowledgeTesting from '../../pages/KnowledgeTesting';

interface MainContentProps {
  mobileMenuOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ mobileMenuOpen }) => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/safety" element={<SafetyGuidelines />} />
        <Route path="/testing" element={<KnowledgeTesting />} />
      </Routes>
    </div>
  );
};

export default MainContent;
