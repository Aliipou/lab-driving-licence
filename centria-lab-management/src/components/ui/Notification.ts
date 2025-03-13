import React from 'react';

interface NotificationProps {
  id: number;
  icon: string;
  title: string;
  time: string;
  onClick?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ icon, title, time, onClick }) => {
  return (
    <div className="notification-item" onClick={onClick}>
      <div className="notification-icon">{icon}</div>
      <div className="notification-content">
        <div className="notification-title">{title}</div>
        <div className="notification-time">{time}</div>
      </div>
    </div>
  );
};

export default Notification;
