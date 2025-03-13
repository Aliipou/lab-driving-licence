import React from 'react';

interface RightSidebarProps {
  isHidden: boolean;
}

interface Notification {
  id: number;
  icon: string;
  title: string;
  time: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isHidden }) => {
  const notifications: Notification[] = [
    { id: 1, icon: '🏆', title: 'Badges', time: 'Just now' },
    { id: 2, icon: '📊', title: 'Progress Tracking', time: '59 minutes ago' },
    { id: 3, icon: '🔑', title: 'Login/ Logout', time: '12 hours ago' }
  ];

  return (
    <div className={`right-sidebar ${isHidden ? 'mobile-hidden' : ''}`}>
      <h3 className="sidebar-right-header">Notifications</h3>
      
      {notifications.map(notification => (
        <div key={notification.id} className="notification-item">
          <div className="notification-icon">{notification.icon}</div>
          <div className="notification-content">
            <div className="notification-title">{notification.title}</div>
            <div className="notification-time">{notification.time}</div>
          </div>
        </div>
      ))}

      <div className="sidebar-right-section">
        <div className="sidebar-right-title">Scores</div>
      </div>

      <div className="sidebar-right-section">
        <div className="sidebar-right-title">Available tests</div>
      </div>

      <div className="sidebar-right-section">
        <div className="sidebar-right-title">Contacts</div>
      </div>

      <div className="sidebar-right-section">
        <div className="sidebar-right-title">Admin</div>
      </div>
    </div>
  );
};

export default RightSidebar;
