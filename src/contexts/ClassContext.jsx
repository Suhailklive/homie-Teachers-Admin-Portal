import React, { createContext, useContext, useState, useEffect } from 'react';

const ClassContext = createContext();

export const useClass = () => {
  const context = useContext(ClassContext);
  if (!context) {
    throw new Error('useClass must be used within a ClassProvider');
  }
  return context;
};

export const ClassProvider = ({ children }) => {
  const [currentClass, setCurrentClass] = useState(null);
  const [viewMode, setViewMode] = useState('overview'); // 'overview' or 'individual'

  // Mock data for classes
  const classes = [
    {
      id: '7a',
      name: 'Grade 7A',
      subject: 'Physics',
      fullName: 'Physics - Grade 7A',
      students: 28,
      averageScore: 78,
      completionRate: 85,
      recentProgress: '+5%',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      room: 'Physics Lab 1',
      nextClass: '2025-09-06 10:00',
      assignments: {
        pending: 3,
        submitted: 25,
        graded: 22
      },
      performance: {
        excellent: 8,
        good: 12,
        average: 6,
        needsHelp: 2
      },
      engagement: 89,
      weeklyProgress: [
        { week: 'Week 1', score: 75 },
        { week: 'Week 2', score: 78 },
        { week: 'Week 3', score: 76 },
        { week: 'Week 4', score: 80 },
        { week: 'Week 5', score: 78 }
      ]
    },
    {
      id: '7b',
      name: 'Grade 7B',
      subject: 'Physics',
      fullName: 'Physics - Grade 7B',
      students: 25,
      averageScore: 82,
      completionRate: 88,
      recentProgress: '+3%',
      schedule: 'Tue, Thu, Sat - 11:00 AM',
      room: 'Physics Lab 2',
      nextClass: '2025-09-06 11:00',
      assignments: {
        pending: 2,
        submitted: 23,
        graded: 20
      },
      performance: {
        excellent: 10,
        good: 10,
        average: 4,
        needsHelp: 1
      },
      engagement: 92,
      weeklyProgress: [
        { week: 'Week 1', score: 80 },
        { week: 'Week 2', score: 81 },
        { week: 'Week 3', score: 79 },
        { week: 'Week 4', score: 84 },
        { week: 'Week 5', score: 82 }
      ]
    },
    {
      id: '8a',
      name: 'Grade 8A',
      subject: 'Physics',
      fullName: 'Physics - Grade 8A',
      students: 30,
      averageScore: 75,
      completionRate: 79,
      recentProgress: '-2%',
      schedule: 'Mon, Wed, Fri - 2:00 PM',
      room: 'Physics Lab 1',
      nextClass: '2025-09-06 14:00',
      assignments: {
        pending: 5,
        submitted: 25,
        graded: 18
      },
      performance: {
        excellent: 6,
        good: 14,
        average: 8,
        needsHelp: 2
      },
      engagement: 76,
      weeklyProgress: [
        { week: 'Week 1', score: 78 },
        { week: 'Week 2', score: 76 },
        { week: 'Week 3', score: 77 },
        { week: 'Week 4', score: 73 },
        { week: 'Week 5', score: 75 }
      ]
    },
    {
      id: '8b',
      name: 'Grade 8B',
      subject: 'Mathematics',
      fullName: 'Mathematics - Grade 8B',
      students: 27,
      averageScore: 84,
      completionRate: 91,
      recentProgress: '+7%',
      schedule: 'Tue, Thu, Sat - 9:00 AM',
      room: 'Math Room 3',
      nextClass: '2025-09-06 09:00',
      assignments: {
        pending: 1,
        submitted: 26,
        graded: 24
      },
      performance: {
        excellent: 12,
        good: 11,
        average: 3,
        needsHelp: 1
      },
      engagement: 94,
      weeklyProgress: [
        { week: 'Week 1', score: 79 },
        { week: 'Week 2', score: 82 },
        { week: 'Week 3', score: 83 },
        { week: 'Week 4', score: 86 },
        { week: 'Week 5', score: 84 }
      ]
    },
    {
      id: '9a',
      name: 'Grade 9A',
      subject: 'Chemistry',
      fullName: 'Chemistry - Grade 9A',
      students: 24,
      averageScore: 77,
      completionRate: 83,
      recentProgress: '+1%',
      schedule: 'Mon, Wed, Fri - 12:00 PM',
      room: 'Chemistry Lab',
      nextClass: '2025-09-06 12:00',
      assignments: {
        pending: 4,
        submitted: 20,
        graded: 18
      },
      performance: {
        excellent: 7,
        good: 10,
        average: 5,
        needsHelp: 2
      },
      engagement: 81,
      weeklyProgress: [
        { week: 'Week 1', score: 75 },
        { week: 'Week 2', score: 76 },
        { week: 'Week 3', score: 78 },
        { week: 'Week 4', score: 79 },
        { week: 'Week 5', score: 77 }
      ]
    }
  ];

  // Initialize with overview mode
  useEffect(() => {
    if (!currentClass && classes.length > 0) {
      setCurrentClass(null); // Start with overview
    }
  }, []);

  const selectClass = (classId) => {
    const selectedClass = classes.find(cls => cls.id === classId);
    setCurrentClass(selectedClass);
    setViewMode('individual');
  };

  const goToOverview = () => {
    setCurrentClass(null);
    setViewMode('overview');
  };

  const getOverviewStats = () => {
    const totalStudents = classes.reduce((sum, cls) => sum + cls.students, 0);
    const avgScore = Math.round(classes.reduce((sum, cls) => sum + cls.averageScore, 0) / classes.length);
    const avgCompletion = Math.round(classes.reduce((sum, cls) => sum + cls.completionRate, 0) / classes.length);
    const avgEngagement = Math.round(classes.reduce((sum, cls) => sum + cls.engagement, 0) / classes.length);
    
    return {
      totalStudents,
      totalClasses: classes.length,
      avgScore,
      avgCompletion,
      avgEngagement
    };
  };

  const getClassById = (classId) => {
    return classes.find(cls => cls.id === classId);
  };

  const value = {
    currentClass,
    viewMode,
    classes,
    selectClass,
    goToOverview,
    getOverviewStats,
    getClassById
  };

  return (
    <ClassContext.Provider value={value}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassProvider;