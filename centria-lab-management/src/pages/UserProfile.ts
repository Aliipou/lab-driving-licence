import React, { useState, useEffect } from 'react';
import { apiClient } from '../api/client';

interface UserData {
  name: string;
  email: string;
  role: string;
  joinedDate: string;
  completedTests: number;
  badges: string[];
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API endpoint
        setLoading(true);
        // Mock data for now
        setTimeout(() => {
          setUserData({
            name: "Test User",
            email: "stringsample@centria.fi",
            role: "Student",
            joinedDate: "2025-02-15",
            completedTests: 3,
            badges: ["Safety Basics", "Lab Protocol", "Equipment Handling"]
          });
          setLoading(false);
        }, 800);
      } catch (err) {
        setError("Failed to load user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="loading-container">Loading user profile...</div>;
  if (error) return <div className="error-container">{error}</div>;
  if (!userData) return <div className="error-container">No user data found</div>;

  return (
    <div className="user-profile-container">
      <div className="secondary-nav">
        <div className="secondary-tab active">Profile</div>
        <div className="secondary-tab">Settings</div>
        <div className="secondary-tab">Security</div>
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            {userData.name.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <span className="profile-role">{userData.role}</span>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h3>Joined</h3>
            <p>{new Date(userData.joinedDate).toLocaleDateString()}</p>
          </div>
          <div className="stat-card">
            <h3>Tests Completed</h3>
            <p>{userData.completedTests}</p>
          </div>
          <div className="stat-card">
            <h3>Badges Earned</h3>
            <p>{userData.badges.length}</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Badges</h3>
          <div className="badges-grid">
            {userData.badges.map((badge, index) => (
              <div key={index} className="badge-item">
                <div className="badge-icon">🏆</div>
                <div className="badge-name">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
