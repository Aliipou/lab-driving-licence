import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

interface CardData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  badgeCount?: number;
  link: string;
}

const CardsGrid: React.FC = () => {
  const cards: CardData[] = [
    {
      id: 'auth',
      title: 'User Authentication',
      description: 'Register and Login Securely\nManage Personal Profile & Settings',
      icon: '👤',
      link: '/auth'
    },
    {
      id: 'device',
      title: 'Device Guidance Access',
      description: 'Search for Guidance on Lab Tools\nView detailed step by step instructions.',
      link: '/device-guidance'
    },
    {
      id: 'safety',
      title: 'Safety Guidelines Access',
      description: 'Read and acknowledge Lab safety protocols...',
      link: '/safety'
    },
    {
      id: 'testing',
      title: 'Knowledge Testing',
      description: 'Take test to know Lab procedures and receive instant feedback on Test performance...',
      link: '/testing'
    },
    {
      id: 'badges',
      title: 'Badges & Progress Tracking',
      description: 'Earn badges for successfully completing Knowledge tests...',
      link: '/badges'
    },
    {
      id: 'lab-guidance',
      title: 'Lab Specific Guidance',
      description: 'Access tailored instructions for different Lab environment...',
      badgeCount: 1,
      link: '/lab-guidance'
    }
  ];

  return (
    <div className="cards-container">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          badgeCount={card.badgeCount}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardsGrid;