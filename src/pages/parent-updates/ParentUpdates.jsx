import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  Eye,
  Edit,
  Plus,
  Filter,
  Search,
  Download,
  Settings,
  User,
  MessageSquare,
  Star,
  BarChart3,
  Target,
  BookOpen
} from 'lucide-react';
import './ParentUpdates.css';

const ParentUpdates = () => {
  const [activeTab, setActiveTab] = useState('digest');
  const [selectedTemplate, setSelectedTemplate] = useState('weekly');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for parent updates
  const weeklyDigests = [
    {
      id: 1,
      week: 'January 22-28, 2024',
      status: 'sent',
      sentDate: '2024-01-28',
      sentTime: '6:00 PM',
      recipients: 142,
      openRate: 94,
      responseRate: 23,
      preview: {
        highlights: [
          'Class average improved by 8% this week',
          'Science project submissions completed',
          'Parent-teacher conference scheduling open'
        ],
        studentProgress: {
          excellent: 45,
          good: 78,
          needsSupport: 19
        }
      }
    },
    {
      id: 2,
      week: 'January 15-21, 2024',
      status: 'sent',
      sentDate: '2024-01-21',
      sentTime: '6:00 PM',
      recipients: 142,
      openRate: 89,
      responseRate: 18,
      preview: {
        highlights: [
          'Midterm assessments completed successfully',
          'New interactive learning modules introduced',
          'Student art exhibition this Friday'
        ],
        studentProgress: {
          excellent: 42,
          good: 81,
          needsSupport: 19
        }
      }
    },
    {
      id: 3,
      week: 'January 8-14, 2024',
      status: 'sent',
      sentDate: '2024-01-14',
      sentTime: '6:00 PM',
      recipients: 140,
      openRate: 91,
      responseRate: 25,
      preview: {
        highlights: [
          'New semester successfully launched',
          'Student goal-setting workshops conducted',
          'Updated curriculum materials available'
        ],
        studentProgress: {
          excellent: 38,
          good: 83,
          needsSupport: 19
        }
      }
    }
  ];

  const individualUpdates = [
    {
      id: 1,
      studentName: 'Arjun Sharma',
      parentEmail: 'parent.arjun@email.com',
      lastSent: '2024-01-26',
      status: 'delivered',
      engagement: 'high',
      updates: [
        'Excellent performance in Physics assessments',
        'Active participation in class discussions',
        'Completed extra credit assignment'
      ]
    },
    {
      id: 2,
      studentName: 'Priya Patel',
      parentEmail: 'priya.parent@email.com',
      lastSent: '2024-01-26',
      status: 'delivered',
      engagement: 'medium',
      updates: [
        'Creative approach to problem-solving',
        'Great improvement in mathematics',
        'Recommended for advanced science track'
      ]
    },
    {
      id: 3,
      studentName: 'Rahul Gupta',
      parentEmail: 'rahul.family@email.com',
      lastSent: '2024-01-26',
      status: 'bounced',
      engagement: 'low',
      updates: [
        'Needs additional support in algebra',
        'Excellent teamwork skills demonstrated',
        'Scheduled for tutoring sessions'
      ]
    }
  ];

  const templates = [
    {
      id: 'weekly',
      name: 'Weekly Class Digest',
      description: 'Comprehensive weekly summary for all parents',
      frequency: 'Weekly',
      lastUsed: '2024-01-28',
      status: 'active'
    },
    {
      id: 'monthly',
      name: 'Monthly Progress Report',
      description: 'Detailed monthly academic progress summary',
      frequency: 'Monthly',
      lastUsed: '2024-01-01',
      status: 'active'
    },
    {
      id: 'individual',
      name: 'Individual Student Update',
      description: 'Personalized updates for specific students',
      frequency: 'As needed',
      lastUsed: '2024-01-26',
      status: 'active'
    },
    {
      id: 'achievement',
      name: 'Achievement Celebration',
      description: 'Special announcements for student achievements',
      frequency: 'Event-based',
      lastUsed: '2024-01-20',
      status: 'active'
    }
  ];

  const communicationStats = [
    {
      label: 'Total Parents Reached',
      value: '142',
      change: '+2',
      trend: 'up',
      icon: Users
    },
    {
      label: 'Average Open Rate',
      value: '91%',
      change: '+3%',
      trend: 'up',
      icon: Eye
    },
    {
      label: 'Response Rate',
      value: '22%',
      change: '+5%',
      trend: 'up',
      icon: MessageSquare
    },
    {
      label: 'Updates This Month',
      value: '28',
      change: '+7',
      trend: 'up',
      icon: Mail
    }
  ];

  const upcomingUpdates = [
    {
      id: 1,
      title: 'Weekly Digest - Feb 4',
      type: 'weekly',
      scheduledDate: '2024-02-04',
      scheduledTime: '6:00 PM',
      recipients: 142,
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'Monthly Progress Report',
      type: 'monthly',
      scheduledDate: '2024-02-01',
      scheduledTime: '5:00 PM',
      recipients: 142,
      status: 'draft'
    },
    {
      id: 3,
      title: 'Science Fair Achievement',
      type: 'achievement',
      scheduledDate: '2024-02-06',
      scheduledTime: '4:00 PM',
      recipients: 67,
      status: 'pending_approval'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'sent': case 'delivered': return 'status-success';
      case 'scheduled': return 'status-scheduled';
      case 'draft': return 'status-draft';
      case 'bounced': return 'status-error';
      case 'pending_approval': return 'status-warning';
      default: return 'status-default';
    }
  };

  const getEngagementColor = (engagement) => {
    switch (engagement) {
      case 'high': return 'engagement-high';
      case 'medium': return 'engagement-medium';
      case 'low': return 'engagement-low';
      default: return 'engagement-medium';
    }
  };

  const filteredDigests = weeklyDigests.filter(digest =>
    digest.week.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredIndividualUpdates = individualUpdates.filter(update =>
    update.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.parentEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="parent-updates">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Parent Updates & Communication</h1>
          <p className="page-subtitle">Automated weekly digests and personalized student progress updates</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <Settings size={16} />
            Settings
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            Create Update
          </button>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="stats-overview">
        {communicationStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className={`stat-change ${stat.trend}`}>
                  <TrendingUp size={12} />
                  {stat.change} this week
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="updates-tabs">
        <button 
          className={`tab-button ${activeTab === 'digest' ? 'active' : ''}`}
          onClick={() => setActiveTab('digest')}
        >
          <Mail size={16} />
          Weekly Digests
        </button>
        <button 
          className={`tab-button ${activeTab === 'individual' ? 'active' : ''}`}
          onClick={() => setActiveTab('individual')}
        >
          <User size={16} />
          Individual Updates
        </button>
        <button 
          className={`tab-button ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          <Edit size={16} />
          Templates
        </button>
        <button 
          className={`tab-button ${activeTab === 'scheduled' ? 'active' : ''}`}
          onClick={() => setActiveTab('scheduled')}
        >
          <Calendar size={16} />
          Scheduled
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Weekly Digests Tab */}
        {activeTab === 'digest' && (
          <div className="digest-section">
            <div className="section-header">
              <h2 className="section-title">Weekly Class Digests</h2>
              <div className="section-controls">
                <div className="search-box">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search digests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <button className="btn btn-primary">
                  <Send size={16} />
                  Send This Week's Digest
                </button>
              </div>
            </div>

            <div className="digests-list">
              {filteredDigests.map((digest) => (
                <div key={digest.id} className="digest-card">
                  <div className="digest-header">
                    <div className="digest-info">
                      <h3 className="digest-title">Weekly Digest: {digest.week}</h3>
                      <div className="digest-meta">
                        <span className={`status-badge ${getStatusColor(digest.status)}`}>
                          {digest.status === 'sent' ? 'Sent' : digest.status}
                        </span>
                        <span className="digest-date">
                          <Calendar size={14} />
                          Sent on {digest.sentDate} at {digest.sentTime}
                        </span>
                      </div>
                    </div>
                    <div className="digest-stats">
                      <div className="stat-item">
                        <span className="stat-value">{digest.recipients}</span>
                        <span className="stat-label">Recipients</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">{digest.openRate}%</span>
                        <span className="stat-label">Opened</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">{digest.responseRate}%</span>
                        <span className="stat-label">Responded</span>
                      </div>
                    </div>
                  </div>

                  <div className="digest-preview">
                    <div className="preview-section">
                      <h4 className="preview-title">Week Highlights</h4>
                      <ul className="highlights-list">
                        {digest.preview.highlights.map((highlight, index) => (
                          <li key={index} className="highlight-item">{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="preview-section">
                      <h4 className="preview-title">Student Progress Overview</h4>
                      <div className="progress-summary">
                        <div className="progress-item excellent">
                          <Award size={16} />
                          <span className="progress-count">{digest.preview.studentProgress.excellent}</span>
                          <span className="progress-label">Excellent</span>
                        </div>
                        <div className="progress-item good">
                          <TrendingUp size={16} />
                          <span className="progress-count">{digest.preview.studentProgress.good}</span>
                          <span className="progress-label">Good Progress</span>
                        </div>
                        <div className="progress-item support">
                          <Target size={16} />
                          <span className="progress-count">{digest.preview.studentProgress.needsSupport}</span>
                          <span className="progress-label">Needs Support</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="digest-actions">
                    <button className="btn btn-ghost btn-sm">
                      <Eye size={14} />
                      View Full
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <Download size={14} />
                      Download
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <Send size={14} />
                      Resend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Updates Tab */}
        {activeTab === 'individual' && (
          <div className="individual-section">
            <div className="section-header">
              <h2 className="section-title">Individual Student Updates</h2>
              <div className="section-controls">
                <div className="search-box">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search students or parents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <select className="filter-select">
                  <option value="all">All Students</option>
                  <option value="high">High Engagement</option>
                  <option value="medium">Medium Engagement</option>
                  <option value="low">Low Engagement</option>
                </select>
              </div>
            </div>

            <div className="individual-updates-list">
              {filteredIndividualUpdates.map((update) => (
                <div key={update.id} className="individual-update-card">
                  <div className="update-header">
                    <div className="student-info">
                      <div className="student-avatar">
                        <User size={20} />
                      </div>
                      <div className="student-details">
                        <h3 className="student-name">{update.studentName}</h3>
                        <p className="parent-email">{update.parentEmail}</p>
                      </div>
                    </div>
                    <div className="update-meta">
                      <span className={`status-badge ${getStatusColor(update.status)}`}>
                        {update.status}
                      </span>
                      <span className={`engagement-badge ${getEngagementColor(update.engagement)}`}>
                        {update.engagement} engagement
                      </span>
                    </div>
                  </div>

                  <div className="update-content">
                    <div className="update-info">
                      <span className="last-sent">
                        <Clock size={14} />
                        Last sent: {update.lastSent}
                      </span>
                    </div>
                    <div className="recent-updates">
                      <h4 className="updates-title">Recent Updates</h4>
                      <ul className="updates-list">
                        {update.updates.map((item, index) => (
                          <li key={index} className="update-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="update-actions">
                    <button className="btn btn-ghost btn-sm">
                      <Edit size={14} />
                      Edit Update
                    </button>
                    <button className="btn btn-primary btn-sm">
                      <Send size={14} />
                      Send Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="templates-section">
            <div className="section-header">
              <h2 className="section-title">Communication Templates</h2>
              <button className="btn btn-primary">
                <Plus size={16} />
                Create Template
              </button>
            </div>

            <div className="templates-grid">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="template-header">
                    <h3 className="template-name">{template.name}</h3>
                    <span className={`status-badge ${template.status === 'active' ? 'status-success' : 'status-draft'}`}>
                      {template.status}
                    </span>
                  </div>
                  <p className="template-description">{template.description}</p>
                  <div className="template-meta">
                    <span className="template-frequency">
                      <Calendar size={14} />
                      {template.frequency}
                    </span>
                    <span className="template-last-used">
                      <Clock size={14} />
                      Last used: {template.lastUsed}
                    </span>
                  </div>
                  <div className="template-actions">
                    <button className="btn btn-ghost btn-sm">
                      <Edit size={14} />
                      Edit
                    </button>
                    <button className="btn btn-primary btn-sm">
                      <Send size={14} />
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scheduled Tab */}
        {activeTab === 'scheduled' && (
          <div className="scheduled-section">
            <div className="section-header">
              <h2 className="section-title">Scheduled Updates</h2>
              <button className="btn btn-primary">
                <Plus size={16} />
                Schedule Update
              </button>
            </div>

            <div className="scheduled-list">
              {upcomingUpdates.map((update) => (
                <div key={update.id} className="scheduled-card">
                  <div className="scheduled-header">
                    <div className="scheduled-info">
                      <h3 className="scheduled-title">{update.title}</h3>
                      <span className="scheduled-type">{update.type}</span>
                    </div>
                    <span className={`status-badge ${getStatusColor(update.status)}`}>
                      {update.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className="scheduled-details">
                    <div className="schedule-time">
                      <Calendar size={16} />
                      <span>{update.scheduledDate} at {update.scheduledTime}</span>
                    </div>
                    <div className="schedule-recipients">
                      <Users size={16} />
                      <span>{update.recipients} recipients</span>
                    </div>
                  </div>

                  <div className="scheduled-actions">
                    <button className="btn btn-ghost btn-sm">
                      <Eye size={14} />
                      Preview
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <Edit size={14} />
                      Edit
                    </button>
                    {update.status === 'draft' && (
                      <button className="btn btn-primary btn-sm">
                        <CheckCircle size={14} />
                        Approve
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentUpdates;