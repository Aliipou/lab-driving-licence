import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  badgeCount?: number;
  link: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, icon, badgeCount, link }) => {
  return (
    <Link to={link} className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}<br />
        </React.Fragment>
      ))}</p>
      {icon && <div className="card-icon">{icon}</div>}
      {badgeCount !== undefined && badgeCount > 0 && (
        <div className="badge-count">{badgeCount}</div>
      )}
    </Link>
  );
};

export default Card;
