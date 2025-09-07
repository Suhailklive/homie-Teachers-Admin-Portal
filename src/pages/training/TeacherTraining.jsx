import React, { useState } from 'react';
import { 
  GraduationCap, 
  Play, 
  Clock, 
  Star, 
  Award, 
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  User,
  Bot,
  MessageSquare,
  Video,
  FileText
} from 'lucide-react';
import './TeacherTraining.css';

const TeacherTraining = () => {
  const [activeTab, setActiveTab] = useState('modules');
  const [selectedModule, setSelectedModule] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      message: 'Hello! I\'m your AI Teaching Assistant. How can I help you improve your teaching methods today?',
      timestamp: '10:30 AM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Mock data for training modules
  const trainingModules = [
    {
      id: 1,
      title: 'AI-Powered Assessment Techniques',
      description: 'Learn how to leverage AI tools for more effective student assessment',
      duration: '25 min',
      difficulty: 'Intermediate',
      category: 'Assessment',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      studentsCompleted: 234,
      thumbnail: '/thumbnails/ai-assessment.jpg',
      status: 'not-started',
      modules: 4,
      progress: 0
    },
    {
      id: 2,
      title: 'Engaging Students with Interactive Content',
      description: 'Strategies to create more engaging and interactive classroom experiences',
      duration: '30 min',
      difficulty: 'Beginner',
      category: 'Engagement',
      instructor: 'Prof. Michael Chen',
      rating: 4.9,
      studentsCompleted: 456,
      thumbnail: '/thumbnails/interactive-content.jpg',
      status: 'in-progress',
      modules: 5,
      progress: 60
    },
    {
      id: 3,
      title: 'Personalized Learning Pathways',
      description: 'Design customized learning experiences for different student needs',
      duration: '35 min',
      difficulty: 'Advanced',
      category: 'Pedagogy',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.7,
      studentsCompleted: 189,
      thumbnail: '/thumbnails/personalized-learning.jpg',
      status: 'completed',
      modules: 6,
      progress: 100
    },
    {
      id: 4,
      title: 'Digital Classroom Management',
      description: 'Best practices for managing digital learning environments',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Management',
      instructor: 'Ms. Lisa Thompson',
      rating: 4.6,
      studentsCompleted: 312,
      thumbnail: '/thumbnails/classroom-management.jpg',
      status: 'not-started',
      modules: 3,
      progress: 0
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'AI Assessment Master',
      description: 'Completed 5 AI-related training modules',
      icon: Bot,
      unlocked: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Student Engagement Expert',
      description: 'Achieved 90%+ student engagement rate',
      icon: Users,
      unlocked: true,
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Continuous Learner',
      description: 'Complete 10 training modules',
      icon: GraduationCap,
      unlocked: false,
      progress: 70
    }
  ];

  const learningPath = {
    title: 'AI-Enhanced Teaching Mastery',
    description: 'A comprehensive learning path to master AI tools in education',
    totalModules: 12,
    completedModules: 4,
    estimatedTime: '8 hours',
    modules: [
      { title: 'Introduction to AI in Education', status: 'completed' },
      { title: 'AI Assessment Tools', status: 'completed' },
      { title: 'Personalized Learning with AI', status: 'completed' },
      { title: 'AI-Powered Content Creation', status: 'completed' },
      { title: 'Student Analytics and Insights', status: 'current' },
      { title: 'Advanced AI Teaching Strategies', status: 'locked' }
    ]
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          sender: 'ai',
          message: 'That\'s a great question! Based on your teaching profile, I recommend trying the interactive whiteboard feature with your physics lessons. Would you like me to show you how to set it up?',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'difficulty-beginner';
      case 'Intermediate': return 'difficulty-intermediate';
      case 'Advanced': return 'difficulty-advanced';
      default: return 'difficulty-beginner';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-progress';
      default: return 'status-new';
    }
  };

  return (
    <div className="teacher-training">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Teacher Training & Development</h1>
          <p className="page-subtitle">Enhance your teaching skills with AI-powered micro-learning modules</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <Calendar size={16} />
            My Schedule
          </button>
          <button className="btn btn-primary">
            <GraduationCap size={16} />
            Browse Catalog
          </button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="progress-overview">
        <div className="overview-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <GraduationCap size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Modules Completed</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Clock size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">24h</span>
              <span className="stat-label">Learning Time</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">Certificates Earned</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">94%</span>
              <span className="stat-label">Avg. Score</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="training-tabs">
        <button 
          className={`tab-button ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          <BookOpen size={16} />
          Training Modules
        </button>
        <button 
          className={`tab-button ${activeTab === 'path' ? 'active' : ''}`}
          onClick={() => setActiveTab('path')}
        >
          <TrendingUp size={16} />
          Learning Path
        </button>
        <button 
          className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <Award size={16} />
          Achievements
        </button>
        <button 
          className={`tab-button ${activeTab === 'ai-tutor' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai-tutor')}
        >
          <Bot size={16} />
          AI Tutor
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Training Modules Tab */}
        {activeTab === 'modules' && (
          <div className="modules-section">
            <div className="section-header">
              <h2 className="section-title">Available Training Modules</h2>
              <div className="filter-controls">
                <select className="filter-select">
                  <option value="all">All Categories</option>
                  <option value="assessment">Assessment</option>
                  <option value="engagement">Engagement</option>
                  <option value="pedagogy">Pedagogy</option>
                  <option value="management">Management</option>
                </select>
              </div>
            </div>

            <div className="modules-grid">
              {trainingModules.map((module) => (
                <div 
                  key={module.id} 
                  className="module-card"
                  onClick={() => setSelectedModule(module)}
                >
                  <div className="module-thumbnail">
                    <img 
                      src={module.thumbnail} 
                      alt={module.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="thumbnail-fallback" style={{ display: 'none' }}>
                      <BookOpen size={32} />
                    </div>
                    <div className={`module-status ${getStatusColor(module.status)}`}>
                      {module.status === 'completed' ? <CheckCircle size={16} /> : 
                       module.status === 'in-progress' ? <Play size={16} /> : 
                       <BookOpen size={16} />}
                    </div>
                  </div>

                  <div className="module-content">
                    <div className="module-header">
                      <h3 className="module-title">{module.title}</h3>
                      <div className="module-meta">
                        <span className="module-duration">
                          <Clock size={14} />
                          {module.duration}
                        </span>
                        <span className={`module-difficulty ${getDifficultyColor(module.difficulty)}`}>
                          {module.difficulty}
                        </span>
                      </div>
                    </div>

                    <p className="module-description">{module.description}</p>

                    <div className="module-stats">
                      <div className="module-rating">
                        <Star size={14} className="star-filled" />
                        <span>{module.rating}</span>
                      </div>
                      <div className="module-students">
                        <Users size={14} />
                        <span>{module.studentsCompleted} completed</span>
                      </div>
                    </div>

                    {module.progress > 0 && (
                      <div className="module-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{module.progress}% complete</span>
                      </div>
                    )}

                    <div className="module-actions">
                      <button className="btn btn-primary btn-sm">
                        {module.status === 'completed' ? 'Review' : 
                         module.status === 'in-progress' ? 'Continue' : 'Start'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Path Tab */}
        {activeTab === 'path' && (
          <div className="path-section">
            <div className="learning-path-card">
              <div className="path-header">
                <h2 className="path-title">{learningPath.title}</h2>
                <p className="path-description">{learningPath.description}</p>
                <div className="path-stats">
                  <span>{learningPath.completedModules}/{learningPath.totalModules} modules</span>
                  <span>~{learningPath.estimatedTime} total</span>
                </div>
              </div>

              <div className="path-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(learningPath.completedModules / learningPath.totalModules) * 100}%` }}
                  ></div>
                </div>
                <span className="progress-percentage">
                  {Math.round((learningPath.completedModules / learningPath.totalModules) * 100)}% Complete
                </span>
              </div>

              <div className="path-modules">
                {learningPath.modules.map((module, index) => (
                  <div key={index} className={`path-module ${module.status}`}>
                    <div className="module-icon">
                      {module.status === 'completed' ? <CheckCircle size={16} /> :
                       module.status === 'current' ? <Play size={16} /> :
                       <BookOpen size={16} />}
                    </div>
                    <span className="module-title">{module.title}</span>
                    {module.status === 'current' && (
                      <button className="btn btn-sm btn-primary">Continue</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="achievements-section">
            <h2 className="section-title">Your Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.id} className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                    <div className="achievement-icon">
                      <Icon size={32} />
                    </div>
                    <div className="achievement-content">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <p className="achievement-description">{achievement.description}</p>
                      {achievement.unlocked ? (
                        <span className="achievement-date">Earned on {achievement.date}</span>
                      ) : (
                        <div className="achievement-progress">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <span>{achievement.progress}% complete</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* AI Tutor Tab */}
        {activeTab === 'ai-tutor' && (
          <div className="ai-tutor-section">
            <div className="tutor-container">
              <div className="tutor-info">
                <h2 className="section-title">AI Teaching Assistant</h2>
                <p className="tutor-description">
                  Get personalized teaching advice, lesson planning help, and answers to your educational questions.
                </p>
              </div>

              <div className="chat-container">
                <div className="chat-messages">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                      <div className="message-avatar">
                        {message.sender === 'ai' ? <Bot size={20} /> : <User size={20} />}
                      </div>
                      <div className="message-content">
                        <p className="message-text">{message.message}</p>
                        <span className="message-time">{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Ask your AI tutor anything about teaching..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="message-input"
                  />
                  <button 
                    className="btn btn-primary"
                    onClick={handleSendMessage}
                  >
                    <MessageSquare size={16} />
                    Send
                  </button>
                </div>

                <div className="quick-questions">
                  <span className="quick-label">Quick questions:</span>
                  <div className="quick-buttons">
                    <button className="quick-btn">How to engage shy students?</button>
                    <button className="quick-btn">AI assessment techniques</button>
                    <button className="quick-btn">Lesson planning tips</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherTraining;