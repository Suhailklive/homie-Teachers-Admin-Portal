import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Users,
  Target,
  Clock,
  Filter,
  Search,
  Plus,
  Eye,
  Share2,
  Settings,
  Brain,
  ChevronDown,
  ChevronRight,
  PieChart,
  Activity
} from 'lucide-react';
import './Reports.css';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReports, setSelectedReports] = useState([]);

  // Mock data for reports
  const reportCategories = [
    {
      id: 'performance',
      name: 'Student Performance',
      icon: TrendingUp,
      description: 'Detailed analysis of student academic progress',
      reportCount: 8
    },
    {
      id: 'engagement',
      name: 'Engagement Analytics',
      icon: Activity,
      description: 'Student interaction and participation metrics',
      reportCount: 6
    },
    {
      id: 'assessment',
      name: 'Assessment Reports',
      icon: Target,
      description: 'Comprehensive assessment results and insights',
      reportCount: 12
    },
    {
      id: 'parent',
      name: 'Parent Communications',
      icon: Users,
      description: 'Automated parent update summaries',
      reportCount: 4
    }
  ];

  const availableReports = [
    {
      id: 1,
      title: 'Monthly Student Performance Summary',
      category: 'performance',
      type: 'automated',
      description: 'Comprehensive overview of all students\' academic progress this month',
      lastGenerated: '2024-01-28',
      frequency: 'Monthly',
      status: 'ready',
      downloadCount: 45,
      aiInsights: [
        'Top 20% students show consistent improvement',
        '3 students need additional support in Physics',
        'Overall class average improved by 8% this month'
      ]
    },
    {
      id: 2,
      title: 'Weekly Engagement Analytics',
      category: 'engagement',
      type: 'automated',
      description: 'Student participation patterns and engagement metrics analysis',
      lastGenerated: '2024-01-26',
      frequency: 'Weekly',
      status: 'ready',
      downloadCount: 32,
      aiInsights: [
        'Interactive content engagement up 15%',
        'Morning sessions show highest participation',
        'Discussion forum activity increased significantly'
      ]
    },
    {
      id: 3,
      title: 'Assessment Results Deep Dive',
      category: 'assessment',
      type: 'on-demand',
      description: 'Detailed breakdown of recent test performance with improvement suggestions',
      lastGenerated: '2024-01-25',
      frequency: 'On-demand',
      status: 'generating',
      downloadCount: 28,
      aiInsights: [
        'Questions 5-7 had lowest success rates',
        'Conceptual understanding gaps identified',
        'Recommend additional practice materials'
      ]
    },
    {
      id: 4,
      title: 'Parent Communication Digest',
      category: 'parent',
      type: 'automated',
      description: 'Summary of all parent communications and student progress updates',
      lastGenerated: '2024-01-27',
      frequency: 'Weekly',
      status: 'ready',
      downloadCount: 67,
      aiInsights: [
        'Parent engagement rate: 92%',
        'Most common concerns addressed',
        'Positive feedback trending upward'
      ]
    },
    {
      id: 5,
      title: 'Curiosity Centre Usage Report',
      category: 'engagement',
      type: 'automated',
      description: 'Analysis of student exploration patterns in the Curiosity Centre',
      lastGenerated: '2024-01-24',
      frequency: 'Bi-weekly',
      status: 'ready',
      downloadCount: 19,
      aiInsights: [
        'Solar System module most popular',
        'Average session time: 23 minutes',
        'Discovery patterns suggest high curiosity'
      ]
    }
  ];

  const quickStats = [
    {
      label: 'Reports Generated',
      value: '247',
      change: '+23%',
      trend: 'up',
      icon: FileText
    },
    {
      label: 'AI Insights Created',
      value: '1,890',
      change: '+34%',
      trend: 'up',
      icon: Brain
    },
    {
      label: 'Downloads This Month',
      value: '456',
      change: '+12%',
      trend: 'up',
      icon: Download
    },
    {
      label: 'Parent Reports Sent',
      value: '89',
      change: '+8%',
      trend: 'up',
      icon: Users
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Generated Weekly Performance Report',
      time: '2 hours ago',
      user: 'System',
      status: 'completed'
    },
    {
      id: 2,
      action: 'Downloaded Student Assessment Analysis',
      time: '4 hours ago',
      user: 'Dr. Sarah Johnson',
      status: 'completed'
    },
    {
      id: 3,
      action: 'Scheduled Monthly Parent Updates',
      time: '6 hours ago',
      user: 'System',
      status: 'scheduled'
    },
    {
      id: 4,
      action: 'Created Custom Engagement Report',
      time: '1 day ago',
      user: 'Prof. Michael Chen',
      status: 'completed'
    }
  ];

  const filteredReports = availableReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return 'status-ready';
      case 'generating': return 'status-generating';
      case 'scheduled': return 'status-scheduled';
      default: return 'status-draft';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'ready': return 'Ready';
      case 'generating': return 'Generating...';
      case 'scheduled': return 'Scheduled';
      default: return 'Draft';
    }
  };

  const handleReportSelection = (reportId) => {
    setSelectedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };

  const handleBulkDownload = () => {
    console.log('Downloading reports:', selectedReports);
    // In a real app, this would trigger bulk download
  };

  return (
    <div className="reports">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">AI-Generated Reports</h1>
          <p className="page-subtitle">Comprehensive analytics and insights powered by artificial intelligence</p>
        </div>
        <div className="page-actions">
          {selectedReports.length > 0 && (
            <button className="btn btn-secondary" onClick={handleBulkDownload}>
              <Download size={16} />
              Download Selected ({selectedReports.length})
            </button>
          )}
          <button className="btn btn-secondary">
            <Settings size={16} />
            Report Settings
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            Generate Custom Report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-overview">
        {quickStats.map((stat, index) => {
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
                  {stat.change} vs last month
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Tabs */}
      <div className="reports-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BarChart3 size={16} />
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <FileText size={16} />
          All Reports
        </button>
        <button 
          className={`tab-button ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          <PieChart size={16} />
          Categories
        </button>
        <button 
          className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          <Activity size={16} />
          Recent Activity
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="overview-grid">
              {/* Recent Reports */}
              <div className="overview-card">
                <div className="card-header">
                  <h3 className="card-title">Recent Reports</h3>
                  <button className="btn btn-ghost btn-sm">View All</button>
                </div>
                <div className="recent-reports">
                  {availableReports.slice(0, 3).map((report) => (
                    <div key={report.id} className="recent-report-item">
                      <div className="report-info">
                        <h4 className="report-title">{report.title}</h4>
                        <p className="report-meta">
                          Generated {report.lastGenerated} • {report.downloadCount} downloads
                        </p>
                      </div>
                      <div className="report-actions">
                        <span className={`status-badge ${getStatusColor(report.status)}`}>
                          {getStatusLabel(report.status)}
                        </span>
                        {report.status === 'ready' && (
                          <button className="btn btn-sm btn-ghost">
                            <Download size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights Summary */}
              <div className="overview-card">
                <div className="card-header">
                  <h3 className="card-title">Latest AI Insights</h3>
                  <Brain className="card-icon" size={20} />
                </div>
                <div className="insights-summary">
                  <div className="insight-item">
                    <h4 className="insight-title">Student Performance Trends</h4>
                    <p className="insight-text">Overall class performance has improved by 12% this month, with particular strength in problem-solving skills.</p>
                  </div>
                  <div className="insight-item">
                    <h4 className="insight-title">Engagement Patterns</h4>
                    <p className="insight-text">Interactive content sessions show 35% higher engagement rates compared to traditional lessons.</p>
                  </div>
                  <div className="insight-item">
                    <h4 className="insight-title">Learning Gaps Identified</h4>
                    <p className="insight-text">3 students require additional support in advanced physics concepts - personalized modules recommended.</p>
                  </div>
                </div>
              </div>

              {/* Report Categories Quick Access */}
              <div className="overview-card overview-card-wide">
                <div className="card-header">
                  <h3 className="card-title">Report Categories</h3>
                </div>
                <div className="categories-quick">
                  {reportCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.id} className="category-quick-item">
                        <div className="category-icon">
                          <Icon size={24} />
                        </div>
                        <div className="category-info">
                          <h4 className="category-name">{category.name}</h4>
                          <p className="category-count">{category.reportCount} reports available</p>
                        </div>
                        <button className="btn btn-sm btn-ghost">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Reports Tab */}
        {activeTab === 'reports' && (
          <div className="reports-section">
            {/* Filters */}
            <div className="reports-filters">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <select 
                className="filter-select"
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <select className="filter-select">
                <option value="all">All Types</option>
                <option value="automated">Automated</option>
                <option value="on-demand">On-demand</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            {/* Reports List */}
            <div className="reports-list">
              {filteredReports.map((report) => (
                <div key={report.id} className="report-card">
                  <div className="report-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedReports.includes(report.id)}
                      onChange={() => handleReportSelection(report.id)}
                    />
                  </div>
                  
                  <div className="report-content">
                    <div className="report-header">
                      <div className="report-main">
                        <h3 className="report-title">{report.title}</h3>
                        <p className="report-description">{report.description}</p>
                      </div>
                      <div className="report-meta">
                        <span className={`status-badge ${getStatusColor(report.status)}`}>
                          {getStatusLabel(report.status)}
                        </span>
                        <span className="report-type">{report.type}</span>
                      </div>
                    </div>

                    <div className="report-details">
                      <div className="report-stats">
                        <span className="stat">
                          <Calendar size={14} />
                          Generated: {report.lastGenerated}
                        </span>
                        <span className="stat">
                          <Clock size={14} />
                          {report.frequency}
                        </span>
                        <span className="stat">
                          <Download size={14} />
                          {report.downloadCount} downloads
                        </span>
                      </div>

                      {/* AI Insights Preview */}
                      <div className="ai-insights-preview">
                        <h4 className="insights-title">
                          <Brain size={16} />
                          Key AI Insights
                        </h4>
                        <ul className="insights-list">
                          {report.aiInsights.slice(0, 2).map((insight, index) => (
                            <li key={index} className="insight-item-small">{insight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="report-actions">
                    <button className="action-btn">
                      <Eye size={16} />
                      Preview
                    </button>
                    {report.status === 'ready' && (
                      <button className="action-btn primary">
                        <Download size={16} />
                        Download
                      </button>
                    )}
                    <button className="action-btn">
                      <Share2 size={16} />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="categories-section">
            <div className="categories-grid">
              {reportCategories.map((category) => {
                const Icon = category.icon;
                const categoryReports = availableReports.filter(r => r.category === category.id);
                
                return (
                  <div key={category.id} className="category-card">
                    <div className="category-header">
                      <div className="category-icon-large">
                        <Icon size={32} />
                      </div>
                      <div className="category-info">
                        <h3 className="category-name">{category.name}</h3>
                        <p className="category-description">{category.description}</p>
                        <span className="category-count">{category.reportCount} reports</span>
                      </div>
                    </div>

                    <div className="category-reports">
                      {categoryReports.slice(0, 3).map((report) => (
                        <div key={report.id} className="category-report-item">
                          <span className="report-name">{report.title}</span>
                          <span className={`status-dot ${getStatusColor(report.status)}`}></span>
                        </div>
                      ))}
                    </div>

                    <div className="category-actions">
                      <button className="btn btn-secondary btn-sm">View All</button>
                      <button className="btn btn-primary btn-sm">Generate New</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="activity-section">
            <div className="activity-header">
              <h2 className="section-title">Recent Activity</h2>
              <div className="activity-filters">
                <select className="filter-select">
                  <option value="all">All Activities</option>
                  <option value="generated">Generated</option>
                  <option value="downloaded">Downloaded</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
            </div>

            <div className="activity-timeline">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-indicator">
                    <div className={`activity-dot ${activity.status}`}></div>
                  </div>
                  <div className="activity-content">
                    <div className="activity-main">
                      <h4 className="activity-action">{activity.action}</h4>
                      <p className="activity-meta">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                    <span className={`activity-status ${activity.status}`}>
                      {activity.status}
                    </span>
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

export default Reports;