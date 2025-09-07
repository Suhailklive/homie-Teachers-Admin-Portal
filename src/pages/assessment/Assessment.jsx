import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  BarChart3,
  Users,
  Trophy,
  Target,
  Filter,
  Search
} from 'lucide-react';
import { Card, Button, Table, Input } from '../../components/ui';
import './Assessment.css';

const Assessment = () => {
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for assessments
  const assessments = [
    {
      id: 1,
      title: 'Physics Chapter 5 - Light and Reflection',
      type: 'Mock Exam',
      totalStudents: 45,
      completed: 42,
      pending: 3,
      averageScore: 78,
      date: '2024-01-15',
      status: 'completed',
      autoGraded: 38,
      manualReview: 4,
      duration: '60 min'
    },
    {
      id: 2,
      title: 'Weekly Assessment - Solar System',
      type: 'Quiz',
      totalStudents: 45,
      completed: 40,
      pending: 5,
      averageScore: 85,
      date: '2024-01-12',
      status: 'active',
      autoGraded: 35,
      manualReview: 5,
      duration: '30 min'
    },
    {
      id: 3,
      title: 'Mid-Term Exam - Motion and Forces',
      type: 'Exam',
      totalStudents: 45,
      completed: 45,
      pending: 0,
      averageScore: 72,
      date: '2024-01-08',
      status: 'completed',
      autoGraded: 40,
      manualReview: 5,
      duration: '90 min'
    }
  ];

  // Mock student results data
  const studentResults = [
    {
      id: 1,
      name: 'Arjun Sharma',
      score: 95,
      status: 'completed',
      submittedAt: '2024-01-15 14:30',
      timeSpent: '52 min',
      correctAnswers: 19,
      totalQuestions: 20,
      needsReview: false
    },
    {
      id: 2,
      name: 'Priya Patel',
      score: 88,
      status: 'completed',
      submittedAt: '2024-01-15 14:25',
      timeSpent: '58 min',
      correctAnswers: 17,
      totalQuestions: 20,
      needsReview: true
    },
    {
      id: 3,
      name: 'Rahul Gupta',
      score: 72,
      status: 'completed',
      submittedAt: '2024-01-15 14:40',
      timeSpent: '60 min',
      correctAnswers: 14,
      totalQuestions: 20,
      needsReview: false
    },
    {
      id: 4,
      name: 'Anita Singh',
      score: null,
      status: 'pending',
      submittedAt: null,
      timeSpent: null,
      correctAnswers: null,
      totalQuestions: 20,
      needsReview: false
    }
  ];

  const assessmentColumns = [
    {
      title: 'Assessment',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div className="assessment-info">
          <div className="assessment-title">{text}</div>
          <div className="assessment-meta">
            <span className="assessment-type">{record.type}</span>
            <span className="assessment-date">{record.date}</span>
            <span className="assessment-duration">{record.duration}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      align: 'center',
      render: (_, record) => (
        <div className="progress-info">
          <div className="progress-numbers">
            {record.completed}/{record.totalStudents} completed
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(record.completed / record.totalStudents) * 100}%` }}
            ></div>
          </div>
        </div>
      )
    },
    {
      title: 'Average Score',
      dataIndex: 'averageScore',
      key: 'averageScore',
      align: 'center',
      render: (score) => (
        <div className={`score-badge ${score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'}`}>
          {score}%
        </div>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <span className={`status-badge status-${status}`}>
          {status === 'completed' && <CheckCircle size={16} />}
          {status === 'active' && <Clock size={16} />}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'right',
      render: (_, record) => (
        <div className="table-actions">
          <Button 
            size="sm" 
            variant="ghost"
            icon={<Eye size={16} />}
            onClick={() => setSelectedAssessment(record)}
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            icon={<Download size={16} />}
          >
            Export
          </Button>
        </div>
      )
    }
  ];

  const studentColumns = [
    {
      title: 'Student',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      align: 'center',
      render: (score, record) => (
        score !== null ? (
          <div className={`score-badge ${score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'}`}>
            {score}%
          </div>
        ) : (
          <span className="text-muted">Pending</span>
        )
      )
    },
    {
      title: 'Correct Answers',
      dataIndex: 'correctAnswers',
      key: 'correctAnswers',
      align: 'center',
      render: (correct, record) => (
        correct !== null ? `${correct}/${record.totalQuestions}` : '-'
      )
    },
    {
      title: 'Time Spent',
      dataIndex: 'timeSpent',
      key: 'timeSpent',
      align: 'center',
      render: (time) => time || '-'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status, record) => (
        <div className="student-status">
          <span className={`status-badge status-${status}`}>
            {status === 'completed' && <CheckCircle size={14} />}
            {status === 'pending' && <Clock size={14} />}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          {record.needsReview && (
            <span className="review-needed">Needs Review</span>
          )}
        </div>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'right',
      render: (_, record) => (
        <div className="table-actions">
          {record.status === 'completed' && (
            <Button size="sm" variant="ghost" icon={<Eye size={16} />}>
              View
            </Button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="assessment-page">
      <div className="page-header">
        <div className="page-title-section">
          <h1 className="page-title">Assessment & Results</h1>
          <p className="page-subtitle">
            Manage assessments, track student performance, and review auto-graded results
          </p>
        </div>
        <div className="page-actions">
          <Button variant="secondary" icon={<Filter size={16} />}>
            Filter
          </Button>
          <Button variant="primary" icon={<FileText size={16} />}>
            Create Assessment
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="assessment-stats">
        <Card className="stat-card">
          <div className="stat-icon stat-icon-blue">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-title">Total Assessments</div>
            <div className="stat-value">12</div>
            <div className="stat-change positive">+2 this week</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-green">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-title">Students Assessed</div>
            <div className="stat-value">142</div>
            <div className="stat-change positive">100% participation</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-purple">
            <Trophy size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-title">Average Score</div>
            <div className="stat-value">78%</div>
            <div className="stat-change positive">+5% improvement</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-orange">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-title">Auto-Graded</div>
            <div className="stat-value">95%</div>
            <div className="stat-change neutral">5% need review</div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      {selectedAssessment ? (
        /* Assessment Details View */
        <div className="assessment-details">
          <div className="details-header">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedAssessment(null)}
              className="back-button"
            >
              ← Back to Assessments
            </Button>
            <div className="assessment-title-section">
              <h2>{selectedAssessment.title}</h2>
              <div className="assessment-meta">
                <span className="meta-item">{selectedAssessment.type}</span>
                <span className="meta-item">{selectedAssessment.date}</span>
                <span className="meta-item">{selectedAssessment.duration}</span>
              </div>
            </div>
            <div className="details-actions">
              <Button variant="secondary" icon={<BarChart3 size={16} />}>
                Analytics
              </Button>
              <Button variant="primary" icon={<Download size={16} />}>
                Export Results
              </Button>
            </div>
          </div>

          {/* Assessment Summary Cards */}
          <div className="assessment-summary">
            <Card>
              <div className="summary-item">
                <div className="summary-value">{selectedAssessment.completed}/{selectedAssessment.totalStudents}</div>
                <div className="summary-label">Completed</div>
              </div>
            </Card>
            <Card>
              <div className="summary-item">
                <div className="summary-value">{selectedAssessment.averageScore}%</div>
                <div className="summary-label">Average Score</div>
              </div>
            </Card>
            <Card>
              <div className="summary-item">
                <div className="summary-value">{selectedAssessment.autoGraded}</div>
                <div className="summary-label">Auto-Graded</div>
              </div>
            </Card>
            <Card>
              <div className="summary-item">
                <div className="summary-value">{selectedAssessment.manualReview}</div>
                <div className="summary-label">Need Review</div>
              </div>
            </Card>
          </div>

          {/* Student Results */}
          <Card>
            <div className="card-header">
              <h3>Student Results</h3>
              <div className="results-filters">
                <Input 
                  placeholder="Search students..."
                  icon={<Search size={16} />}
                  size="sm"
                />
                <Button size="sm" variant="ghost">
                  All Students
                </Button>
                <Button size="sm" variant="ghost">
                  Need Review
                </Button>
              </div>
            </div>
            <Table 
              columns={studentColumns}
              data={studentResults}
              hoverable={true}
              striped={true}
            />
          </Card>
        </div>
      ) : (
        /* Assessments List View */
        <Card>
          <div className="card-header">
            <h3>Recent Assessments</h3>
            <div className="assessment-filters">
              <Input 
                placeholder="Search assessments..."
                icon={<Search size={16} />}
                size="sm"
              />
              <Button size="sm" variant="ghost">
                All Types
              </Button>
              <Button size="sm" variant="ghost">
                This Week
              </Button>
            </div>
          </div>
          <Table 
            columns={assessmentColumns}
            data={assessments}
            hoverable={true}
            onRowClick={(record) => setSelectedAssessment(record)}
          />
        </Card>
      )}
    </div>
  );
};

export default Assessment;