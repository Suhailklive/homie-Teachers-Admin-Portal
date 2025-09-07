// Mock data for Teachers Portal

export const mockClasses = [
  {
    id: 'class-7a-physics',
    name: 'Class 7A Physics',
    subject: 'Physics',
    grade: '7th Standard',
    students: 32,
    activeStudents: 28,
    completionRate: 85,
    averageScore: 78,
    recentProgress: '+5%'
  },
  {
    id: 'class-7b-physics',
    name: 'Class 7B Physics', 
    subject: 'Physics',
    grade: '7th Standard',
    students: 30,
    activeStudents: 25,
    completionRate: 72,
    averageScore: 71,
    recentProgress: '+2%'
  },
  {
    id: 'class-8a-math',
    name: 'Class 8A Mathematics',
    subject: 'Mathematics', 
    grade: '8th Standard',
    students: 35,
    activeStudents: 33,
    completionRate: 91,
    averageScore: 82,
    recentProgress: '+8%'
  }
];\n\nexport const mockStudents = [\n  {\n    id: 'student-001',\n    name: 'Aarav Sharma',\n    avatar: '/avatars/aarav.jpg',\n    classId: 'class-7a-physics',\n    currentChapter: 'Solar System',\n    progress: 85,\n    lastActive: '2 hours ago',\n    weeklyScore: 92,\n    strengths: ['Space Exploration', 'AI Visionary'],\n    curiosityTopics: ['Astrophysics 101', 'Intro to Robotics'],\n    timeSpent: '3.5 hours',\n    performance: 'excellent'\n  },\n  {\n    id: 'student-002',\n    name: 'Priya Patel',\n    avatar: '/avatars/priya.jpg',\n    classId: 'class-7a-physics',\n    currentChapter: 'Solar System',\n    progress: 78,\n    lastActive: '1 hour ago',\n    weeklyScore: 87,\n    strengths: ['Math Enthusiast', 'Problem Solver'],\n    curiosityTopics: ['Advanced Mathematics', 'Physics Concepts'],\n    timeSpent: '4.2 hours',\n    performance: 'good'\n  },\n  {\n    id: 'student-003',\n    name: 'Rahul Kumar',\n    avatar: '/avatars/rahul.jpg',\n    classId: 'class-7a-physics',\n    currentChapter: 'Solar System',\n    progress: 65,\n    lastActive: '5 hours ago',\n    weeklyScore: 74,\n    strengths: ['Creative Thinking'],\n    curiosityTopics: ['Space Technology', 'Inventions'],\n    timeSpent: '2.8 hours',\n    performance: 'average'\n  },\n  {\n    id: 'student-004',\n    name: 'Ananya Singh',\n    avatar: '/avatars/ananya.jpg',\n    classId: 'class-7a-physics',\n    currentChapter: 'Solar System',\n    progress: 95,\n    lastActive: '30 minutes ago',\n    weeklyScore: 96,\n    strengths: ['Space Explorer', 'Science Enthusiast', 'Quick Learner'],\n    curiosityTopics: ['Advanced Astrophysics', 'Space Missions', 'Quantum Physics'],\n    timeSpent: '5.1 hours',\n    performance: 'exceptional'\n  }\n];\n\nexport const mockAssessments = [\n  {\n    id: 'assessment-001',\n    title: 'Solar System - Chapter End Quiz',\n    type: 'Mock Exam',\n    difficulty: 'Mixed',\n    totalQuestions: 25,\n    submittedCount: 28,\n    totalStudents: 32,\n    averageScore: 78,\n    createdDate: '2025-09-01',\n    status: 'active'\n  },\n  {\n    id: 'assessment-002',\n    title: 'Planets and Their Orbits',\n    type: 'Practice Exercise',\n    difficulty: 'Easy',\n    totalQuestions: 10,\n    submittedCount: 30,\n    totalStudents: 32,\n    averageScore: 85,\n    createdDate: '2025-08-28',\n    status: 'completed'\n  },\n  {\n    id: 'assessment-003',\n    title: 'Celestial Bodies Advanced',\n    type: 'Mock Exam',\n    difficulty: 'Hard',\n    totalQuestions: 15,\n    submittedCount: 25,\n    totalStudents: 32,\n    averageScore: 68,\n    createdDate: '2025-08-25',\n    status: 'completed'\n  }\n];\n\nexport const mockCuriosityData = [\n  {\n    topic: 'Astrophysics 101',\n    engagedStudents: 18,\n    totalTime: '42 hours',\n    averageRating: 4.8,\n    completionRate: 73\n  },\n  {\n    topic: 'Intro to Robotics',\n    engagedStudents: 12,\n    totalTime: '28 hours',\n    averageRating: 4.6,\n    completionRate: 67\n  },\n  {\n    topic: 'Space Technology',\n    engagedStudents: 15,\n    totalTime: '35 hours',\n    averageRating: 4.7,\n    completionRate: 80\n  },\n  {\n    topic: 'Quantum Physics Basics',\n    engagedStudents: 8,\n    totalTime: '19 hours',\n    averageRating: 4.9,\n    completionRate: 45\n  }\n];\n\nexport const mockTalentedStudents = [\n  {\n    studentId: 'student-004',\n    name: 'Ananya Singh',\n    avatar: '/avatars/ananya.jpg',\n    talentAreas: ['Space Exploration', 'Advanced Physics', 'Research Skills'],\n    overallScore: 96,\n    curiosityIndex: 92,\n    recommendedTrack: 'Advanced Astrophysics Program',\n    potentialCareer: 'Astrophysicist'\n  },\n  {\n    studentId: 'student-001',\n    name: 'Aarav Sharma',\n    avatar: '/avatars/aarav.jpg',\n    talentAreas: ['AI & Technology', 'Problem Solving'],\n    overallScore: 92,\n    curiosityIndex: 88,\n    recommendedTrack: 'Technology Innovation Track',\n    potentialCareer: 'AI Researcher'\n  }\n];\n\nexport const mockTeacherNotes = [\n  {\n    id: 'note-001',\n    title: 'Effective Solar System Teaching Methods',\n    content: 'Using visual aids and interactive models greatly improves student understanding of planetary motion and scale.',\n    author: 'Dr. Sunita Mehta',\n    subject: 'Physics',\n    grade: '7th Standard',\n    createdDate: '2025-09-02',\n    likes: 12,\n    comments: 3\n  },\n  {\n    id: 'note-002',\n    title: 'Student Engagement Strategies',\n    content: 'Incorporating curiosity-driven learning with technology tools like Teachable Machine shows remarkable results.',\n    author: 'Prof. Rajesh Kumar',\n    subject: 'General',\n    grade: 'All',\n    createdDate: '2025-09-01',\n    likes: 18,\n    comments: 7\n  }\n];\n\nexport const mockReports = [\n  {\n    id: 'report-001',\n    title: 'Weekly Progress Report - Class 7A Physics',\n    type: 'Weekly',\n    generatedDate: '2025-09-01',\n    students: 32,\n    averageProgress: 78,\n    keyInsights: ['Strong performance in visual concepts', 'Need more practice in calculations'],\n    parentsSent: 32\n  },\n  {\n    id: 'report-002',\n    title: 'Monthly Assessment Analysis',\n    type: 'Monthly',\n    generatedDate: '2025-08-31',\n    students: 32,\n    averageProgress: 82,\n    keyInsights: ['Excellent curiosity engagement', 'High completion rates'],\n    parentsSent: 32\n  }\n];\n\nexport const mockQuestions = [\n  {\n    id: 'q-001',\n    question: 'Which planet is known as the Red Planet?',\n    type: 'multiple-choice',\n    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],\n    correctAnswer: 'Mars',\n    difficulty: 'Easy',\n    chapter: 'Solar System'\n  },\n  {\n    id: 'q-002',\n    question: 'Explain the formation of the Solar System according to the Nebular Theory.',\n    type: 'descriptive',\n    difficulty: 'Hard',\n    chapter: 'Solar System',\n    maxMarks: 5\n  }\n];