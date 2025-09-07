// Admin Mock Data - School-wide data for administrative oversight

// School-wide student data
export const adminStudentData = [
  {
    id: 'STU001',
    studentId: 'ST2024001',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@school.edu',
    class: '7A',
    subjects: ['Physics', 'Mathematics', 'Chemistry'],
    enrollmentDate: '2024-01-15',
    status: 'active',
    parentContact: {
      father: 'Raj Sharma',
      mother: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'raj.sharma@email.com'
    },
    performance: {
      overallGrade: 'A',
      averageScore: 96,
      attendance: 95,
      behaviorRating: 'Excellent',
      lastAssessment: '2024-09-01'
    },
    analytics: {
      engagementLevel: 'High',
      learningStyle: 'Visual',
      strongSubjects: ['Physics', 'Mathematics'],
      improvementAreas: ['Chemistry'],
      riskLevel: 'Low'
    }
  },
  {
    id: 'STU002',
    studentId: 'ST2024002',
    name: 'Priya Patel',
    email: 'priya.patel@school.edu',
    class: '7B',
    subjects: ['Physics', 'Mathematics', 'Biology'],
    enrollmentDate: '2024-01-15',
    status: 'active',
    parentContact: {
      father: 'Amit Patel',
      mother: 'Sunita Patel',
      phone: '+91 98765 43211',
      email: 'amit.patel@email.com'
    },
    performance: {
      overallGrade: 'A',
      averageScore: 94,
      attendance: 98,
      behaviorRating: 'Excellent',
      lastAssessment: '2024-09-01'
    },
    analytics: {
      engagementLevel: 'High',
      learningStyle: 'Kinesthetic',
      strongSubjects: ['Biology', 'Mathematics'],
      improvementAreas: ['Physics'],
      riskLevel: 'Low'
    }
  },
  {
    id: 'STU003',
    studentId: 'ST2024003',
    name: 'Rahul Gupta',
    email: 'rahul.gupta@school.edu',
    class: '8A',
    subjects: ['Physics', 'Mathematics', 'Chemistry'],
    enrollmentDate: '2024-01-15',
    status: 'active',
    parentContact: {
      father: 'Suresh Gupta',
      mother: 'Kavita Gupta',
      phone: '+91 98765 43212',
      email: 'suresh.gupta@email.com'
    },
    performance: {
      overallGrade: 'A',
      averageScore: 92,
      attendance: 92,
      behaviorRating: 'Good',
      lastAssessment: '2024-09-01'
    },
    analytics: {
      engagementLevel: 'Medium',
      learningStyle: 'Auditory',
      strongSubjects: ['Mathematics', 'Chemistry'],
      improvementAreas: ['Physics'],
      riskLevel: 'Low'
    }
  },
  {
    id: 'STU004',
    studentId: 'ST2024004',
    name: 'Sneha Rao',
    email: 'sneha.rao@school.edu',
    class: '8B',
    subjects: ['Physics', 'Mathematics', 'Biology'],
    enrollmentDate: '2024-01-15',
    status: 'active',
    parentContact: {
      father: 'Mohan Rao',
      mother: 'Lakshmi Rao',
      phone: '+91 98765 43213',
      email: 'mohan.rao@email.com'
    },
    performance: {
      overallGrade: 'A',
      averageScore: 90,
      attendance: 96,
      behaviorRating: 'Excellent',
      lastAssessment: '2024-09-01'
    },
    analytics: {
      engagementLevel: 'High',
      learningStyle: 'Visual',
      strongSubjects: ['Biology', 'Physics'],
      improvementAreas: ['Mathematics'],
      riskLevel: 'Low'
    }
  },
  {
    id: 'STU005',
    studentId: 'ST2024005',
    name: 'Aditya Singh',
    email: 'aditya.singh@school.edu',
    class: '7A',
    subjects: ['Physics', 'Mathematics', 'Chemistry'],
    enrollmentDate: '2024-02-01',
    status: 'active',
    parentContact: {
      father: 'Vikram Singh',
      mother: 'Pooja Singh',
      phone: '+91 98765 43214',
      email: 'vikram.singh@email.com'
    },
    performance: {
      overallGrade: 'B',
      averageScore: 75,
      attendance: 88,
      behaviorRating: 'Good',
      lastAssessment: '2024-09-01'
    },
    analytics: {
      engagementLevel: 'Medium',
      learningStyle: 'Mixed',
      strongSubjects: ['Mathematics'],
      improvementAreas: ['Physics', 'Chemistry'],
      riskLevel: 'Medium'
    }
  }
];

// Teacher data for admin management
export const adminTeacherData = [
  {
    id: 'TCH001',
    employeeId: 'EMP2024001',
    name: 'Sunita Mehta',
    email: 'sunita.mehta@school.edu',
    department: 'Physics',
    subjects: ['Physics'],
    classes: ['7A', '7B', '8A'],
    joinDate: '2020-06-15',
    status: 'active',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '8 years',
    contact: {
      phone: '+91 98765 54321',
      address: '123 Teacher Colony, City'
    },
    performance: {
      rating: 4.8,
      studentFeedback: 4.7,
      contentCreated: 156,
      assessmentsCreated: 89,
      engagementScore: 94
    },
    analytics: {
      totalLessons: 156,
      totalAssessments: 89,
      averageStudentScore: 87,
      contentApprovalRate: 98,
      lastActive: '2024-09-07'
    }
  },
  {
    id: 'TCH002',
    employeeId: 'EMP2024002',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@school.edu',
    department: 'Mathematics',
    subjects: ['Mathematics'],
    classes: ['7A', '7B', '8A', '8B'],
    joinDate: '2019-03-20',
    status: 'active',
    qualification: 'M.Sc. Mathematics, B.Ed.',
    experience: '12 years',
    contact: {
      phone: '+91 98765 54322',
      address: '456 Teacher Colony, City'
    },
    performance: {
      rating: 4.6,
      studentFeedback: 4.5,
      contentCreated: 203,
      assessmentsCreated: 145,
      engagementScore: 91
    },
    analytics: {
      totalLessons: 203,
      totalAssessments: 145,
      averageStudentScore: 85,
      contentApprovalRate: 96,
      lastActive: '2024-09-07'
    }
  },
  {
    id: 'TCH003',
    employeeId: 'EMP2024003',
    name: 'Priya Sharma',
    email: 'priya.sharma@school.edu',
    department: 'Chemistry',
    subjects: ['Chemistry'],
    classes: ['7A', '8A'],
    joinDate: '2021-08-10',
    status: 'active',
    qualification: 'M.Sc. Chemistry, B.Ed.',
    experience: '5 years',
    contact: {
      phone: '+91 98765 54323',
      address: '789 Teacher Colony, City'
    },
    performance: {
      rating: 4.7,
      studentFeedback: 4.6,
      contentCreated: 98,
      assessmentsCreated: 67,
      engagementScore: 89
    },
    analytics: {
      totalLessons: 98,
      totalAssessments: 67,
      averageStudentScore: 82,
      contentApprovalRate: 94,
      lastActive: '2024-09-06'
    }
  }
];

// Class management data
export const adminClassData = [
  {
    id: 'CLS001',
    name: '7A',
    grade: 7,
    section: 'A',
    classTeacher: 'Sunita Mehta',
    subjects: ['Physics', 'Mathematics', 'Chemistry', 'Biology'],
    totalStudents: 32,
    activeStudents: 30,
    room: 'Room 101',
    schedule: {
      startTime: '09:00',
      endTime: '15:30',
      daysPerWeek: 6
    },
    performance: {
      averageScore: 84,
      attendanceRate: 93,
      completionRate: 87,
      behaviorRating: 'Good'
    }
  },
  {
    id: 'CLS002',
    name: '7B',
    grade: 7,
    section: 'B',
    classTeacher: 'Rajesh Kumar',
    subjects: ['Physics', 'Mathematics', 'Chemistry', 'Biology'],
    totalStudents: 28,
    activeStudents: 28,
    room: 'Room 102',
    schedule: {
      startTime: '09:00',
      endTime: '15:30',
      daysPerWeek: 6
    },
    performance: {
      averageScore: 86,
      attendanceRate: 95,
      completionRate: 89,
      behaviorRating: 'Excellent'
    }
  },
  {
    id: 'CLS003',
    name: '8A',
    grade: 8,
    section: 'A',
    classTeacher: 'Priya Sharma',
    subjects: ['Physics', 'Mathematics', 'Chemistry', 'Biology'],
    totalStudents: 30,
    activeStudents: 29,
    room: 'Room 201',
    schedule: {
      startTime: '09:00',
      endTime: '15:30',
      daysPerWeek: 6
    },
    performance: {
      averageScore: 81,
      attendanceRate: 91,
      completionRate: 85,
      behaviorRating: 'Good'
    }
  },
  {
    id: 'CLS004',
    name: '8B',
    grade: 8,
    section: 'B',
    classTeacher: 'Sunita Mehta',
    subjects: ['Physics', 'Mathematics', 'Chemistry', 'Biology'],
    totalStudents: 26,
    activeStudents: 26,
    room: 'Room 202',
    schedule: {
      startTime: '09:00',
      endTime: '15:30',
      daysPerWeek: 6
    },
    performance: {
      averageScore: 88,
      attendanceRate: 96,
      completionRate: 91,
      behaviorRating: 'Excellent'
    }
  }
];

// Content oversight data
export const adminContentData = [
  {
    id: 'CNT001',
    type: 'lesson',
    title: 'Solar System Basics',
    subject: 'Physics',
    class: '7A',
    teacher: 'Sunita Mehta',
    createdDate: '2024-08-15',
    status: 'approved',
    studentsAccessed: 30,
    averageRating: 4.6,
    flagged: false,
    reviewDate: '2024-08-16',
    reviewer: 'Dr. Rajesh Kumar'
  },
  {
    id: 'CNT002',
    type: 'assessment',
    title: 'Physics Quiz - Chapter 5',
    subject: 'Physics',
    class: '7A',
    teacher: 'Sunita Mehta',
    createdDate: '2024-09-01',
    status: 'pending_review',
    studentsAccessed: 0,
    averageRating: null,
    flagged: false,
    reviewDate: null,
    reviewer: null
  },
  {
    id: 'CNT003',
    type: 'lesson',
    title: 'Algebra Fundamentals',
    subject: 'Mathematics',
    class: '7B',
    teacher: 'Rajesh Kumar',
    createdDate: '2024-08-20',
    status: 'approved',
    studentsAccessed: 28,
    averageRating: 4.4,
    flagged: false,
    reviewDate: '2024-08-21',
    reviewer: 'Dr. Rajesh Kumar'
  },
  {
    id: 'CNT004',
    type: 'assessment',
    title: 'Chemistry Lab Test',
    subject: 'Chemistry',
    class: '8A',
    teacher: 'Priya Sharma',
    createdDate: '2024-09-03',
    status: 'flagged',
    studentsAccessed: 15,
    averageRating: 3.2,
    flagged: true,
    flagReason: 'Difficulty level too high',
    reviewDate: '2024-09-04',
    reviewer: 'Dr. Rajesh Kumar'
  }
];

// Performance analytics data
export const adminAnalyticsData = {
  schoolOverview: {
    totalStudents: 1247,
    totalTeachers: 89,
    totalClasses: 45,
    totalSubjects: 12,
    averagePerformance: 84.2,
    attendanceRate: 93.5,
    systemHealth: 98.2
  },
  monthlyTrends: [
    { month: 'Jan', students: 1200, performance: 82, attendance: 91 },
    { month: 'Feb', students: 1210, performance: 83, attendance: 92 },
    { month: 'Mar', students: 1225, performance: 84, attendance: 93 },
    { month: 'Apr', students: 1235, performance: 85, attendance: 94 },
    { month: 'May', students: 1240, performance: 84, attendance: 93 },
    { month: 'Jun', students: 1245, performance: 84, attendance: 93 },
    { month: 'Jul', students: 1247, performance: 84, attendance: 94 }
  ],
  subjectPerformance: [
    { subject: 'Mathematics', averageScore: 87, studentsEnrolled: 1247, teachersAssigned: 15 },
    { subject: 'Physics', averageScore: 85, studentsEnrolled: 1247, teachersAssigned: 12 },
    { subject: 'Chemistry', averageScore: 82, studentsEnrolled: 845, teachersAssigned: 10 },
    { subject: 'Biology', averageScore: 89, studentsEnrolled: 402, teachersAssigned: 8 }
  ],
  teacherEngagement: [
    { teacherId: 'TCH001', name: 'Sunita Mehta', contentCreated: 156, studentEngagement: 94, performanceRating: 4.8 },
    { teacherId: 'TCH002', name: 'Rajesh Kumar', contentCreated: 203, studentEngagement: 91, performanceRating: 4.6 },
    { teacherId: 'TCH003', name: 'Priya Sharma', contentCreated: 98, studentEngagement: 89, performanceRating: 4.7 }
  ],
  riskStudents: [
    { id: 'STU005', name: 'Aditya Singh', class: '7A', riskLevel: 'Medium', factors: ['Low Attendance', 'Declining Grades'] },
    { id: 'STU012', name: 'Kavya Reddy', class: '8B', riskLevel: 'High', factors: ['Poor Performance', 'Low Engagement'] }
  ]
};

// Assessment scheduling data
export const adminAssessmentData = [
  {
    id: 'ASS001',
    title: 'Mid-term Physics Exam',
    subject: 'Physics',
    classes: ['7A', '7B'],
    teacher: 'Sunita Mehta',
    scheduledDate: '2024-09-15',
    duration: 120,
    type: 'exam',
    status: 'scheduled',
    studentsEnrolled: 60,
    room: 'Exam Hall A'
  },
  {
    id: 'ASS002',
    title: 'Mathematics Quiz',
    subject: 'Mathematics',
    classes: ['8A', '8B'],
    teacher: 'Rajesh Kumar',
    scheduledDate: '2024-09-10',
    duration: 60,
    type: 'quiz',
    status: 'completed',
    studentsEnrolled: 56,
    room: 'Room 301'
  },
  {
    id: 'ASS003',
    title: 'Chemistry Practical',
    subject: 'Chemistry',
    classes: ['7A'],
    teacher: 'Priya Sharma',
    scheduledDate: '2024-09-12',
    duration: 90,
    type: 'practical',
    status: 'in_progress',
    studentsEnrolled: 32,
    room: 'Chemistry Lab'
  }
];

// System notifications for admin
export const adminNotificationsData = [
  {
    id: 'NOT001',
    type: 'system',
    priority: 'high',
    title: 'Server Maintenance Scheduled',
    message: 'System maintenance scheduled for tonight 2:00 AM - 4:00 AM',
    timestamp: '2024-09-07T10:30:00Z',
    read: false,
    actionRequired: true
  },
  {
    id: 'NOT002',
    type: 'user',
    priority: 'medium',
    title: 'New Teacher Registration',
    message: 'New teacher registration pending approval: Dr. Amit Verma',
    timestamp: '2024-09-07T09:15:00Z',
    read: false,
    actionRequired: true
  },
  {
    id: 'NOT003',
    type: 'content',
    priority: 'medium',
    title: 'Content Review Required',
    message: '3 lessons and 2 assessments require administrative review',
    timestamp: '2024-09-07T08:45:00Z',
    read: true,
    actionRequired: true
  },
  {
    id: 'NOT004',
    type: 'performance',
    priority: 'low',
    title: 'Weekly Report Ready',
    message: 'School performance report for week ending Sep 6 is available',
    timestamp: '2024-09-07T07:00:00Z',
    read: true,
    actionRequired: false
  }
];

export default {
  students: adminStudentData,
  teachers: adminTeacherData,
  classes: adminClassData,
  content: adminContentData,
  analytics: adminAnalyticsData,
  assessments: adminAssessmentData,
  notifications: adminNotificationsData
};