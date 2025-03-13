import React from 'react';
import CardsGrid from '../components/dashboard/CardsGrid';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Secondary Navigation */}
      <div className="secondary-nav">
        <div className="secondary-tab">Overview</div>
        <div className="secondary-tab active">Users</div>
        <div className="secondary-tab">Activity</div>
        <div className="secondary-tab">Upcoming tests</div>
      </div>
      
      {/* Main Dashboard Content */}
      <CardsGrid />
    </>
  );
};

export default Dashboard;
