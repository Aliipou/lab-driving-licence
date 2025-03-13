import React, { useState, useEffect } from 'react';

interface Test {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimit: number;
  passingScore: number;
  category: string;
  completed: boolean;
  score?: number;
}

const KnowledgeTesting: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock categories
  const categories = ['all', 'safety', 'equipment', 'procedures', 'protocols'];

  useEffect(() => {
    // Simulate API call to fetch tests
    setLoading(true);
    setTimeout(() => {
      const mockTests: Test[] = [
        {
          id: '1',
          title: 'Laboratory Safety Basics',
          description: 'Test your knowledge of basic lab safety protocols',
          questionCount: 15,
          timeLimit: 20,
          passingScore: 80,
          category: 'safety',
          completed: true,
          score: 93
        },
        {
          id: '2',
          title: 'Chemical Handling Procedures',
          description: 'Assessment on proper handling and storage of chemicals',
          questionCount: 20,
          timeLimit: 30,
          passingScore: 85,
          category: 'safety',
          completed: false
        },
        {
          id: '3',
          title: 'Microscope Operation',
          description: 'Test your knowledge on proper microscope usage',
          questionCount: 10,
          timeLimit: 15,
          passingScore: 70,
          category: 'equipment',
          completed: true,
          score: 80
        },
        {
          id: '4',
          title: 'Sample Preparation Protocol',
          description: 'Assessment on proper sample preparation techniques',
          questionCount: 15,
          timeLimit: 25,
          passingScore: 75,
          category: 'protocols',
          completed: false
        }
      ];
      setTests(mockTests);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTests = activeCategory === 'all' 
    ? tests 
    : tests.filter(test => test.category === activeCategory);

  return (
    <div className="knowledge-testing-container">
      <div className="secondary-nav">
        <div className="secondary-tab active">Available Tests</div>
        <div className="secondary-tab">Completed Tests</div>
        <div className="secondary-tab">My Scores</div>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category} 
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-container">Loading tests...</div>
      ) : (
        <div className="tests-grid">
          {filteredTests.map(test => (
            <div key={test.id} className={`test-card ${test.completed ? 'completed' : ''}`}>
              <div className="test-header">
                <h3>{test.title}</h3>
                <span className="test-category">{test.category}</span>
              </div>
              <p className="test-description">{test.description}</p>
              <div className="test-details">
                <div className="test-detail">
                  <span className="detail-label">Questions:</span>
                  <span className="detail-value">{test.questionCount}</span>
                </div>
                <div className="test-detail">
                  <span className="detail-label">Time Limit:</span>
                  <span className="detail-value">{test.timeLimit} min</span>
                </div>
                <div className="test-detail">
                  <span className="detail-label">Passing Score:</span>
                  <span className="detail-value">{test.passingScore}%</span>
                </div>
              </div>
              
              {test.completed ? (
                <div className="test-completed">
                  <div className="test-score">Score: {test.score}%</div>
                  <button className="review-btn">Review Test</button>
                </div>
              ) : (
                <button className="start-test-btn">Start Test</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnowledgeTesting;
