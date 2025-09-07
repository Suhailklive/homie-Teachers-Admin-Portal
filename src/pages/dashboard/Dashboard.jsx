import React from 'react';
import { BarChart3, Users, TrendingUp, Star, User, Calendar, Clock, BookOpen } from 'lucide-react';
import { useClass } from '../../contexts/ClassContext';
import ClassSwitcher from '../../components/ui/ClassSwitcher';
import Chart from '../../components/ui/Chart';
import ProgressBar from '../../components/ui/ProgressBar';
import './Dashboard.css';

const Dashboard = () => {
  const { currentClass, viewMode, classes, getOverviewStats } = useClass();

  // Overview mode - show all classes summary
  if (viewMode === 'overview') {
    return <OverviewDashboard />;
  }

  // Individual class mode - show specific class details
  if (currentClass) {
    return <IndividualClassDashboard classData={currentClass} />;
  }

  // Fallback to overview
  return <OverviewDashboard />;
};

// Overview Dashboard Component
const OverviewDashboard = () => {
  const { classes: allClasses, getOverviewStats } = useClass();
  const overviewStats = getOverviewStats();

  const stats = [
    {
      id: 'total-students',
      title: 'Total Students',
      value: overviewStats.totalStudents,
      color: 'blue',
      icon: Users
    },
    {
      id: 'active-classes',
      title: 'Active Classes',
      value: overviewStats.totalClasses,
      color: 'green',
      icon: BarChart3
    },
    {
      id: 'avg-performance',
      title: 'Avg Performance',
      value: `${overviewStats.avgScore}%`,
      color: 'purple',
      icon: TrendingUp
    },
    {
      id: 'completion-rate',
      title: 'Avg Completion',
      value: `${overviewStats.avgCompletion}%`,
      color: 'orange',
      icon: Star
    }
  ];

  const mockClasses = [
    {
      id: 1,
      name: 'Physics - Grade 7A',
      students: 28,
      averageScore: 78,
      completionRate: 85,
      recentProgress: '+5%'
    },
    {
      id: 2,
      name: 'Physics - Grade 7B',
      students: 25,
      averageScore: 82,
      completionRate: 88,
      recentProgress: '+3%'
    },
    {
      id: 3,
      name: 'Physics - Grade 8A',
      students: 30,
      averageScore: 75,
      completionRate: 79,
      recentProgress: '-2%'
    }
  ];

  // Get top performers across all classes
  const getAllTopPerformers = () => {
    return [
      {
        id: 1,
        name: 'Arjun Sharma',
        avatar: '/avatars/student1.jpg',
        weeklyScore: 96,
        class: '7A'
      },
      {
        id: 2,
        name: 'Priya Patel',
        avatar: '/avatars/student2.jpg',
        weeklyScore: 94,
        class: '7B'
      },
      {
        id: 3,
        name: 'Rahul Gupta',
        avatar: '/avatars/student3.jpg',
        weeklyScore: 92,
        class: '8A'
      },
      {
        id: 4,
        name: 'Sneha Rao',
        avatar: '/avatars/student4.jpg',
        weeklyScore: 90,
        class: '8B'
      }
    ];
  };

  const topPerformers = getAllTopPerformers();

  const getClassPerformanceChart = () => {
    return mockClasses.map(cls => ({
      label: cls.name,
      value: cls.averageScore
    }));
  };

  const curiosityInsights = [
    {
      topic: 'Solar System',
      averageRating: 4.8,
      engagedStudents: 45,
      totalTime: '12h 30m',
      completionRate: 89
    },
    {
      topic: 'Light & Optics',
      averageRating: 4.6,
      engagedStudents: 38,
      totalTime: '8h 45m',
      completionRate: 76
    },
    {
      topic: 'Motion & Forces',
      averageRating: 4.4,
      engagedStudents: 42,
      totalTime: '10h 15m',
      completionRate: 82
    }
  ];

  return (
    <div className="dashboard">
      {/* Dashboard Header with Class Switcher */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-section">
            <h1 className="dashboard-title">All Classes Overview</h1>
            <p className="dashboard-subtitle">Comprehensive view of all your classes and student performance</p>
          </div>
          <ClassSwitcher />
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-secondary">
            <BarChart3 size={16} />
            View Reports
          </button>
          <button className="btn btn-primary">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="stat-card">
              <div className="stat-card-header">
                <div className={`stat-icon stat-icon-${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Performance Chart */}
      <div className="dashboard-card chart-card">
        <div className="card-header">
          <h3 className="card-title">Class Performance Overview</h3>
          <p className="card-subtitle">Average scores across all your classes</p>
        </div>
        <div className="card-content">
          <div className="performance-overview">
            {mockClasses.map((cls, index) => (
              <div key={cls.id} className="performance-card">
                <div className="performance-class-info">
                  <h4 className="class-title">{cls.name}</h4>
                  <p className="class-students">{cls.students} students</p>
                </div>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Average Score</span>
                    <span className={`metric-value score-${cls.averageScore >= 80 ? 'excellent' : cls.averageScore >= 70 ? 'good' : 'needs-improvement'}`}>
                      {cls.averageScore}%
                    </span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Completion</span>
                    <span className="metric-value">{cls.completionRate}%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Progress</span>
                    <span className={`metric-value ${cls.recentProgress.startsWith('+') ? 'positive' : 'negative'}`}>
                      {cls.recentProgress}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Your Classes */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Your Classes</h3>
            <button className="btn btn-ghost btn-sm">Manage All</button>
          </div>
          <div className="card-content">
            <div className="classes-list">
              {mockClasses.map((cls) => (
                <div key={cls.id} className="class-item clickable" onClick={() => window.location.href = `/dashboard/${cls.id}`}>
                  <div className="class-info">
                    <div className="class-name">{cls.name}</div>
                    <div className="class-meta">
                      {cls.students} students • {cls.completionRate}% completion
                    </div>
                  </div>
                  <div className="class-score">
                    <span className="score-value">{cls.averageScore}%</span>
                    <span className={`score-change ${cls.recentProgress.startsWith('+') ? 'positive' : 'negative'}`}>
                      {cls.recentProgress}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Top Performers (All Classes)</h3>
            <button className="btn btn-ghost btn-sm">View All</button>
          </div>
          <div className="card-content">
            <div className="performers-list">
              {topPerformers.map((student, index) => (
                <div key={student.id} className="performer-item">
                  <div className="performer-rank">#{index + 1}</div>
                  <div className="performer-avatar">
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
                  <div className="performer-info">
                    <div className="performer-name">{student.name}</div>
                    <div className="performer-score">{student.weeklyScore}% • Class {student.class}</div>
                  </div>
                  <div className="performer-badge">
                    <Star size={16} className="star-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curiosity Insights Section */}
      <div className="dashboard-card chart-card">
        <div className="card-header">
          <h3 className="card-title">Curiosity Insights</h3>
          <p className="card-subtitle">Most engaging learning topics across all classes</p>
        </div>
        <div className="card-content">
          <div className="curiosity-insights">
            {curiosityInsights.map((insight, index) => (
              <div key={index} className="insight-item">
                <div className="insight-header">
                  <h4 className="insight-topic">{insight.topic}</h4>
                  <div className="insight-rating">
                    <Star size={16} className="star-filled" />
                    <span>{insight.averageRating}</span>
                  </div>
                </div>
                <div className="insight-stats">
                  <div className="insight-stat">
                    <Users size={14} />
                    <span>{insight.engagedStudents} students</span>
                  </div>
                  <div className="insight-stat">
                    <Clock size={14} />
                    <span>{insight.totalTime}</span>
                  </div>
                  <div className="insight-progress">
                    <ProgressBar 
                      value={insight.completionRate} 
                      max={100} 
                      variant="primary" 
                      size="sm"
                      showLabel={true}
                      label={`${insight.completionRate}% completion`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <button className="btn btn-ghost btn-sm">View All</button>
          </div>
          <div className="card-content">
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <BookOpen size={16} />
                </div>
                <div className="activity-content">
                  <div className="activity-title">New assessment created</div>
                  <div className="activity-time">2 hours ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <TrendingUp size={16} />
                </div>
                <div className="activity-content">
                  <div className="activity-title">Class 7A performance improved</div>
                  <div className="activity-time">1 day ago</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <Users size={16} />
                </div>
                <div className="activity-content">
                  <div className="activity-title">15 new parent messages</div>
                  <div className="activity-time">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Upcoming Deadlines</h3>
            <button className="btn btn-ghost btn-sm">Manage</button>
          </div>
          <div className="card-content">
            <div className="deadline-list">
              <div className="deadline-item urgent">
                <div className="deadline-info">
                  <div className="deadline-title">Physics Quiz - Chapter 5</div>
                  <div className="deadline-class">Class 7A • Tomorrow</div>
                </div>
                <div className="deadline-status">
                  <span className="status-badge urgent">Urgent</span>
                </div>
              </div>
              <div className="deadline-item">
                <div className="deadline-info">
                  <div className="deadline-title">Assignment Review</div>
                  <div className="deadline-class">Class 8A • In 3 days</div>
                </div>
                <div className="deadline-status">
                  <span className="status-badge normal">Pending</span>
                </div>
              </div>
              <div className="deadline-item">
                <div className="deadline-info">
                  <div className="deadline-title">Parent-Teacher Meeting</div>
                  <div className="deadline-class">All Classes • Next week</div>
                </div>
                <div className="deadline-status">
                  <span className="status-badge normal">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Class Dashboard Component
const IndividualClassDashboard = ({ classData }) => {
  const classStats = [
    {
      id: 'total-students',
      title: 'Total Students',
      value: classData.students,
      color: 'blue',
      icon: Users
    },
    {
      id: 'avg-score',
      title: 'Average Score',
      value: `${classData.averageScore}%`,
      color: 'purple',
      icon: TrendingUp
    },
    {
      id: 'completion',
      title: 'Completion Rate',
      value: `${classData.completionRate}%`,
      color: 'green',
      icon: Star
    },
    {
      id: 'engagement',
      title: 'Engagement',
      value: `${classData.engagement}%`,
      color: 'orange',
      icon: BarChart3
    }
  ];

  const getUpcomingClass = () => {
    const date = new Date(classData.nextClass);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      room: classData.room
    };
  };

  const upcomingClass = getUpcomingClass();

  return (
    <div className="dashboard individual-dashboard">
      {/* Dashboard Header with Class Switcher */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="title-section">
            <h1 className="dashboard-title">{classData.fullName}</h1>
            <p className="dashboard-subtitle">{classData.students} students • {classData.schedule}</p>
          </div>
          <ClassSwitcher />
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-secondary">
            <Calendar size={16} />
            Schedule
          </button>
          <button className="btn btn-primary">
            <BookOpen size={16} />
            Take Attendance
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {classStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="stat-card">
              <div className="stat-card-header">
                <div className={`stat-icon stat-icon-${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Info */}
      <div className="dashboard-card quick-info-card">
        <div className="card-header">
          <h3 className="card-title">Next Class</h3>
        </div>
        <div className="card-content">
          <div className="next-class-info">
            <div className="next-class-item">
              <Calendar size={16} />
              <span>{upcomingClass.date} at {upcomingClass.time}</span>
            </div>
            <div className="next-class-item">
              <Clock size={16} />
              <span>{upcomingClass.room}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="dashboard-card chart-card">
        <div className="card-header">
          <h3 className="card-title">Weekly Progress Trend</h3>
        </div>
        <div className="card-content">
          <Chart 
            type="line" 
            data={classData.weeklyProgress} 
            height={300}
            title="Class Average Performance Over Time"
          />
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Assignment Status */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Assignments Status</h3>
          </div>
          <div className="card-content">
            <div className="assignment-stats">
              <div className="assignment-stat">
                <div className="stat-number pending">{classData.assignments.pending}</div>
                <div className="stat-label">Pending Review</div>
              </div>
              <div className="assignment-stat">
                <div className="stat-number submitted">{classData.assignments.submitted}</div>
                <div className="stat-label">Submitted</div>
              </div>
              <div className="assignment-stat">
                <div className="stat-number graded">{classData.assignments.graded}</div>
                <div className="stat-label">Graded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance Distribution */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">Performance Distribution</h3>
          </div>
          <div className="card-content">
            <div className="performance-distribution">
              <div className="performance-item excellent">
                <div className="performance-bar">
                  <ProgressBar 
                    value={classData.performance.excellent} 
                    max={classData.students} 
                    variant="success" 
                    size="sm"
                  />
                </div>
                <div className="performance-label">
                  <span className="performance-count">{classData.performance.excellent}</span>
                  <span className="performance-text">Excellent (90%+)</span>
                </div>
              </div>
              <div className="performance-item good">
                <div className="performance-bar">
                  <ProgressBar 
                    value={classData.performance.good} 
                    max={classData.students} 
                    variant="primary" 
                    size="sm"
                  />
                </div>
                <div className="performance-label">
                  <span className="performance-count">{classData.performance.good}</span>
                  <span className="performance-text">Good (75-89%)</span>
                </div>
              </div>
              <div className="performance-item average">
                <div className="performance-bar">
                  <ProgressBar 
                    value={classData.performance.average} 
                    max={classData.students} 
                    variant="warning" 
                    size="sm"
                  />
                </div>
                <div className="performance-label">
                  <span className="performance-count">{classData.performance.average}</span>
                  <span className="performance-text">Average (60-74%)</span>
                </div>
              </div>
              <div className="performance-item needs-help">
                <div className="performance-bar">
                  <ProgressBar 
                    value={classData.performance.needsHelp} 
                    max={classData.students} 
                    variant="error" 
                    size="sm"
                  />
                </div>
                <div className="performance-label">
                  <span className="performance-count">{classData.performance.needsHelp}</span>
                  <span className="performance-text">Needs Help (under 60%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;