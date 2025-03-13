import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopNavigation from './components/layout/TopNavigation';
import LeftSidebar from './components/layout/LeftSidebar';
import RightSidebar from './components/layout/RightSidebar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import Login from './pages/Login';
import { AppProvider, useAppContext } from './context/AppContext';
import useResponsive from './hooks/useResponsive';
import './App.css';

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAppContext();
  
  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

const AppContent: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { isMobile } = useResponsive();
  const { isAuthenticated } = useAppContext();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login />
        } />
        
        <Route path="/*" element={
          <ProtectedRoute>
            <div className="app">
              <LeftSidebar isOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
              
              <div className="main-content-wrapper">
                <TopNavigation 
                  onToggleSidebar={toggleMobileSidebar} 
                  onToggleMenu={toggleMobileMenu} 
                />
                
                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                  <div className="mobile-menu-item">Overview</div>
                  <div className="mobile-menu-item">Activity</div>
                  <div className="mobile-menu-item">User Profile</div>
                  <div className="mobile-menu-item">Account</div>
                  <div className="mobile-menu-item">Safety Guidelines</div>
                  <div className="mobile-menu-item">Knowledge Testing</div>
                </div>
                
                <MainContent mobileMenuOpen={mobileMenuOpen} />
                <Footer />
              </div>
              
              {!isMobile && <RightSidebar isHidden={false} />}
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
