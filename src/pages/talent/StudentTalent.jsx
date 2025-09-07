import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  Award, 
  Brain, 
  Lightbulb,
  BookOpen,
  Search,
  Filter,
  ChevronRight,
  Star,
  User,
  BarChart3,
  Clock
} from 'lucide-react';
import './StudentTalent.css';

const StudentTalent = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTalent, setFilterTalent] = useState('all');

  // Mock data for students with talent identification
  const students = [
    {
      id: 1,
      name: 'Arjun Sharma',
      avatar: '/avatars/student1.jpg',
      class: 'Grade 7A',
      overallScore: 92,
      talentAreas: [
        { area: 'Mathematical Reasoning', score: 95, level: 'Advanced' },
        { area: 'Problem Solving', score: 90, level: 'Advanced' },
        { area: 'Abstract Thinking', score: 88, level: 'Intermediate' }
      ],
      suggestedModules: [
        'Advanced Algebra Concepts',
        'Physics Problem Solving',
        'Mathematical Olympiad Prep'
      ],
      learningStyle: 'Visual-Analytical',
      engagement: 94,
      curiosityScore: 89
    },
    {
      id: 2,
      name: 'Priya Patel',
      avatar: '/avatars/student2.jpg',
      class: 'Grade 7B',
      overallScore: 89,
      talentAreas: [
        { area: 'Creative Thinking', score: 93, level: 'Advanced' },
        { area: 'Communication', score: 91, level: 'Advanced' },
        { area: 'Leadership', score: 87, level: 'Intermediate' }
      ],
      suggestedModules: [
        'Creative Writing Workshop',
        'Public Speaking Mastery',
        'Team Leadership Skills'
      ],
      learningStyle: 'Kinesthetic-Social',
      engagement: 91,
      curiosityScore: 94
    },
    {
      id: 3,
      name: 'Rahul Gupta',
      avatar: '/avatars/student3.jpg',
      class: 'Grade 8A',
      overallScore: 86,
      talentAreas: [
        { area: 'Spatial Intelligence', score: 94, level: 'Advanced' },
        { area: 'Technical Skills', score: 89, level: 'Intermediate' },
        { area: 'Innovation', score: 85, level: 'Intermediate' }
      ],
      suggestedModules: [
        '3D Design Fundamentals',
        'Engineering Basics',
        'Innovation Workshop'
      ],
      learningStyle: 'Visual-Technical',
      engagement: 87,
      curiosityScore: 92
    }
  ];

  const talentCategories = [
    { id: 'mathematical', label: 'Mathematical', icon: BarChart3, count: 12 },
    { id: 'creative', label: 'Creative', icon: Lightbulb, count: 8 },
    { id: 'technical', label: 'Technical', icon: Brain, count: 6 },
    { id: 'leadership', label: 'Leadership', icon: Award, count: 4 },
    { id: 'communication', label: 'Communication', icon: BookOpen, count: 7 }
  ];

  const aiInsights = [
    {
      title: 'High-Potential Students',
      count: 8,
      description: 'Students showing exceptional aptitude across multiple areas',
      action: 'Review advanced pathways'
    },
    {
      title: 'Underutilized Talents',
      count: 5,
      description: 'Students with strong abilities not reflected in current performance',
      action: 'Adjust teaching approach'
    },
    {
      title: 'Curiosity Leaders',
      count: 12,
      description: 'Students driving engagement in Curiosity Centre',
      action: 'Provide additional challenges'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTalent = filterTalent === 'all' || 
      student.talentAreas.some(talent => 
        talent.area.toLowerCase().includes(filterTalent.toLowerCase())
      );
    return matchesSearch && matchesTalent;
  });

  const getTalentLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'talent-advanced';
      case 'Intermediate': return 'talent-intermediate';
      default: return 'talent-basic';
    }
  };

  return (
    <div className="student-talent">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Student Talent Identification</h1>
          <p className="page-subtitle">AI-powered analysis to identify and nurture student strengths</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <Target size={16} />
            Generate Report
          </button>
          <button className="btn btn-primary">
            <Brain size={16} />
            Run AI Analysis
          </button>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="insights-grid">
        {aiInsights.map((insight, index) => (
          <div key={index} className="insight-card">
            <div className="insight-header">
              <h3 className="insight-title">{insight.title}</h3>
              <span className="insight-count">{insight.count}</span>
            </div>
            <p className="insight-description">{insight.description}</p>
            <button className="insight-action">
              {insight.action}
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Talent Categories */}
      <div className="talent-section">
        <h2 className="section-title">Talent Distribution</h2>
        <div className="talent-categories">
          {talentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="talent-category">
                <div className="category-icon">
                  <Icon size={24} />
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category.label}</h3>
                  <span className="category-count">{category.count} students</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Student List Section */}
      <div className="students-section">
        <div className="section-header">
          <h2 className="section-title">Student Analysis</h2>
          <div className="section-controls">
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <select 
              className="filter-select"
              value={filterTalent}
              onChange={(e) => setFilterTalent(e.target.value)}
            >
              <option value="all">All Talents</option>
              <option value="mathematical">Mathematical</option>
              <option value="creative">Creative</option>
              <option value="technical">Technical</option>
              <option value="leadership">Leadership</option>
            </select>
          </div>
        </div>

        <div className="students-grid">
          {filteredStudents.map((student) => (
            <div 
              key={student.id} 
              className={`student-card ${selectedStudent?.id === student.id ? 'selected' : ''}`}
              onClick={() => setSelectedStudent(student)}
            >
              <div className="student-header">
                <div className="student-avatar">
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback" style={{ display: 'none' }}>
                    <User size={20} />
                  </div>
                </div>
                <div className="student-info">
                  <h3 className="student-name">{student.name}</h3>
                  <span className="student-class">{student.class}</span>
                </div>
                <div className="student-score">
                  <span className="score-value">{student.overallScore}%</span>
                </div>
              </div>

              <div className="student-talents">
                {student.talentAreas.slice(0, 2).map((talent, index) => (
                  <div key={index} className="talent-tag">
                    <span className="talent-name">{talent.area}</span>
                    <span className={`talent-level ${getTalentLevelColor(talent.level)}`}>
                      {talent.level}
                    </span>
                  </div>
                ))}
              </div>

              <div className="student-metrics">
                <div className="metric">
                  <TrendingUp size={14} />
                  <span>Engagement: {student.engagement}%</span>
                </div>
                <div className="metric">
                  <Lightbulb size={14} />
                  <span>Curiosity: {student.curiosityScore}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Detail Panel */}
      {selectedStudent && (
        <div className="student-detail">
          <div className="detail-header">
            <h2 className="detail-title">Talent Analysis: {selectedStudent.name}</h2>
            <button 
              className="btn btn-ghost"
              onClick={() => setSelectedStudent(null)}
            >
              Close
            </button>
          </div>

          <div className="detail-content">
            <div className="detail-grid">
              {/* Talent Areas */}
              <div className="detail-section">
                <h3 className="detail-section-title">Identified Talents</h3>
                <div className="talents-list">
                  {selectedStudent.talentAreas.map((talent, index) => (
                    <div key={index} className="talent-item">
                      <div className="talent-info">
                        <span className="talent-name">{talent.area}</span>
                        <span className={`talent-level ${getTalentLevelColor(talent.level)}`}>
                          {talent.level}
                        </span>
                      </div>
                      <div className="talent-score">
                        <span className="score-number">{talent.score}%</span>
                        <div className="score-bar">
                          <div 
                            className="score-fill"
                            style={{ width: `${talent.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Modules */}
              <div className="detail-section">
                <h3 className="detail-section-title">Suggested Advanced Modules</h3>
                <div className="modules-list">
                  {selectedStudent.suggestedModules.map((module, index) => (
                    <div key={index} className="module-item">
                      <BookOpen size={16} className="module-icon" />
                      <span className="module-name">{module}</span>
                      <button className="btn btn-sm btn-ghost">
                        Assign
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Profile */}
              <div className="detail-section">
                <h3 className="detail-section-title">Learning Profile</h3>
                <div className="profile-info">
                  <div className="profile-item">
                    <span className="profile-label">Learning Style:</span>
                    <span className="profile-value">{selectedStudent.learningStyle}</span>
                  </div>
                  <div className="profile-item">
                    <span className="profile-label">Engagement Level:</span>
                    <span className="profile-value">{selectedStudent.engagement}% (High)</span>
                  </div>
                  <div className="profile-item">
                    <span className="profile-label">Curiosity Score:</span>
                    <span className="profile-value">{selectedStudent.curiosityScore}% (High)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTalent;