import React, { useState, useEffect } from 'react';

interface GuidelineItem {
  id: string;
  title: string;
  category: string;
  content: string;
  acknowledged: boolean;
}

const SafetyGuidelines: React.FC = () => {
  const [guidelines, setGuidelines] = useState<GuidelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate fetching guidelines from API
    setLoading(true);
    setTimeout(() => {
      const mockGuidelines = [
        {
          id: '1',
          title: 'Laboratory General Safety Rules',
          category: 'general',
          content: 'Always wear appropriate PPE. No food or drinks in the lab. Report all accidents immediately.',
          acknowledged: true
        },
        {
          id: '2',
          title: 'Chemical Handling Procedures',
          category: 'chemical',
          content: 'Always read MSDS before handling chemicals. Use fume hoods when working with volatile substances.',
          acknowledged: false
        },
        {
          id: '3',
          title: 'Emergency Response Protocol',
          category: 'emergency',
          content: 'Know the location of emergency exits, eyewash stations, and fire extinguishers.',
          acknowledged: true
        },
        {
          id: '4',
          title: 'Electrical Safety Guidelines',
          category: 'equipment',
          content: 'Inspect all electrical equipment before use. Do not use equipment with frayed cords.',
          acknowledged: false
        }
      ];
      setGuidelines(mockGuidelines);
      setLoading(false);
    }, 800);
  }, []);

  const handleAcknowledge = (id: string) => {
    setGuidelines(guidelines.map(item => 
      item.id === id ? { ...item, acknowledged: true } : item
    ));
  };

  const filteredGuidelines = filter === 'all' 
    ? guidelines 
    : filter === 'acknowledged' 
      ? guidelines.filter(g => g.acknowledged) 
      : guidelines.filter(g => !g.acknowledged);

  return (
    <div className="safety-guidelines-container">
      <div className="secondary-nav">
        <div className="secondary-tab active">Safety Guidelines</div>
        <div className="secondary-tab">My Acknowledgments</div>
      </div>

      <div className="guidelines-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Guidelines
        </button>
        <button 
          className={`filter-btn ${filter === 'acknowledged' ? 'active' : ''}`}
          onClick={() => setFilter('acknowledged')}
        >
          Acknowledged
        </button>
        <button 
          className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
      </div>

      {loading ? (
        <div className="loading-container">Loading guidelines...</div>
      ) : (
        <div className="guidelines-list">
          {filteredGuidelines.map(guideline => (
            <div key={guideline.id} className="guideline-card">
              <div className="guideline-header">
                <h3>{guideline.title}</h3>
                <span className="guideline-category">{guideline.category}</span>
              </div>
              <div className="guideline-content">
                {guideline.content}
              </div>
              <div className="guideline-footer">
                {guideline.acknowledged ? (
                  <div className="acknowledged-badge">
                    ✓ Acknowledged
                  </div>
                ) : (
                  <button 
                    className="acknowledge-btn"
                    onClick={() => handleAcknowledge(guideline.id)}
                  >
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SafetyGuidelines;
