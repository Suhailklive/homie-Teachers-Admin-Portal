import React, { useState } from 'react';
import { 
  Bot, 
  FileText, 
  CheckCircle, 
  Edit3, 
  Plus, 
  Download, 
  Upload,
  Wand2,
  Brain,
  Target,
  BookOpen,
  Settings,
  Play,
  Save,
  FileDown,
  Sparkles,
  Copy
} from 'lucide-react';
import { Card, Button, Input } from '../../components/ui';
import './AITools.css';

const AITools = () => {
  const [activeTab, setActiveTab] = useState('question-generator');
  const [generatorSettings, setGeneratorSettings] = useState({
    subject: 'Physics',
    chapter: 'Light and Reflection',
    difficulty: 'medium',
    questionType: 'mcq',
    count: 10
  });
  const [summarizerSettings, setSummarizerSettings] = useState({
    subject: 'Physics',
    chapter: 'Light and Reflection',
    summaryType: 'comprehensive',
    length: 'medium',
    includeKeyPoints: true,
    includeExamples: true,
    includeFormulas: true,
    includeDiagrams: false
  });

  // Mock data for AI tools
  const tools = [
    {
      id: 'question-generator',
      title: 'Question Generator',
      description: 'Generate questions automatically based on curriculum and difficulty level',
      icon: FileText,
      color: 'blue',
      features: ['Multiple choice', 'Short answer', 'Long answer', 'Fill in blanks']
    },
    {
      id: 'answer-checker',
      title: 'Answer Sheet Correction',
      description: 'AI-powered automatic correction with detailed feedback',
      icon: CheckCircle,
      color: 'green',
      features: ['Auto grading', 'Feedback generation', 'Plagiarism detection', 'Rubric scoring']
    },
    {
      id: 'assignment-creator',
      title: 'Assignment Creator',
      description: 'Create comprehensive assignments with questions and rubrics',
      icon: Edit3,
      color: 'purple',
      features: ['Template library', 'Rubric generator', 'Due date management', 'Auto distribution']
    },
    {
      id: 'chapter-summarizer',
      title: 'Chapter Summarizer',
      description: 'AI-powered summarization of chapters, topics, and learning materials',
      icon: Brain,
      color: 'orange',
      features: ['Key concepts', 'Student-friendly language', 'Multiple formats', 'Customizable length']
    }
  ];

  const recentlyGenerated = [
    {
      id: 1,
      title: 'Light and Reflection MCQs',
      type: 'Multiple Choice',
      count: 15,
      difficulty: 'Medium',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Solar System Short Answers',
      type: 'Short Answer',
      count: 8,
      difficulty: 'Easy',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Motion and Forces Essay',
      type: 'Long Answer',
      count: 3,
      difficulty: 'Hard',
      date: '2024-01-13',
      status: 'draft'
    }
  ];

  const recentSummaries = [
    {
      id: 1,
      title: 'Light and Reflection - Key Concepts',
      type: 'Comprehensive',
      subject: 'Physics',
      length: 'Medium',
      date: '2024-01-15',
      status: 'completed',
      wordsCount: 450
    },
    {
      id: 2,
      title: 'Solar System Overview',
      type: 'Student Notes',
      subject: 'Physics',
      length: 'Short',
      date: '2024-01-14',
      status: 'completed',
      wordsCount: 250
    },
    {
      id: 3,
      title: 'Motion and Forces Summary',
      type: 'Teaching Notes',
      subject: 'Physics',
      length: 'Long',
      date: '2024-01-13',
      status: 'draft',
      wordsCount: 680
    }
  ];

  const correctionQueue = [
    {
      id: 1,
      assignment: 'Chapter 5 Quiz',
      student: 'Arjun Sharma',
      submitted: '2024-01-15 14:30',
      status: 'ai-corrected',
      confidence: 95,
      needsReview: false
    },
    {
      id: 2,
      assignment: 'Weekly Test',
      student: 'Priya Patel',
      submitted: '2024-01-15 14:25',
      status: 'pending-review',
      confidence: 78,
      needsReview: true
    },
    {
      id: 3,
      assignment: 'Mid-term Exam',
      student: 'Rahul Gupta',
      submitted: '2024-01-15 14:20',
      status: 'in-progress',
      confidence: null,
      needsReview: false
    }
  ];

  const renderQuestionGenerator = () => (
    <div className="ai-tool-content">
      <div className="tool-header">
        <div className="tool-title-section">
          <h2>Question Generator</h2>
          <p>Generate high-quality questions automatically using AI</p>
        </div>
        <Button variant="primary" icon={<Wand2 size={16} />}>
          Generate Questions
        </Button>
      </div>

      <div className="generator-layout">
        {/* Settings Panel */}
        <Card className="generator-settings">
          <div className="card-header">
            <h3>Generation Settings</h3>
            <Button size="sm" variant="ghost" icon={<Settings size={16} />}>
              Advanced
            </Button>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label>Subject</label>
              <select 
                value={generatorSettings.subject}
                onChange={(e) => setGeneratorSettings(prev => ({...prev, subject: e.target.value}))}
                className="form-select"
              >
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
              </select>
            </div>

            <div className="form-group">
              <label>Chapter/Topic</label>
              <select 
                value={generatorSettings.chapter}
                onChange={(e) => setGeneratorSettings(prev => ({...prev, chapter: e.target.value}))}
                className="form-select"
              >
                <option value="Light and Reflection">Light and Reflection</option>
                <option value="Solar System">Solar System</option>
                <option value="Motion and Forces">Motion and Forces</option>
              </select>
            </div>

            <div className="form-group">
              <label>Question Type</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="questionType" 
                    value="mcq"
                    checked={generatorSettings.questionType === 'mcq'}
                    onChange={(e) => setGeneratorSettings(prev => ({...prev, questionType: e.target.value}))}
                  />
                  Multiple Choice
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="questionType" 
                    value="short"
                    checked={generatorSettings.questionType === 'short'}
                    onChange={(e) => setGeneratorSettings(prev => ({...prev, questionType: e.target.value}))}
                  />
                  Short Answer
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="questionType" 
                    value="long"
                    checked={generatorSettings.questionType === 'long'}
                    onChange={(e) => setGeneratorSettings(prev => ({...prev, questionType: e.target.value}))}
                  />
                  Long Answer
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Difficulty Level</label>
              <div className="difficulty-selector">
                {['easy', 'medium', 'hard'].map(level => (
                  <button
                    key={level}
                    className={`difficulty-btn ${generatorSettings.difficulty === level ? 'active' : ''}`}
                    onClick={() => setGeneratorSettings(prev => ({...prev, difficulty: level}))}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Number of Questions</label>
              <Input 
                type="number" 
                value={generatorSettings.count}
                onChange={(e) => setGeneratorSettings(prev => ({...prev, count: parseInt(e.target.value)}))}
                min="1"
                max="50"
              />
            </div>
          </div>
        </Card>

        {/* Preview Panel */}
        <Card className="generator-preview">
          <div className="card-header">
            <h3>Preview</h3>
            <div className="preview-actions">
              <Button size="sm" variant="ghost" icon={<Save size={16} />}>
                Save Draft
              </Button>
              <Button size="sm" variant="secondary" icon={<Download size={16} />}>
                Export
              </Button>
            </div>
          </div>
          <div className="preview-content">
            <div className="sample-question">
              <div className="question-header">
                <span className="question-number">Question 1</span>
                <span className="question-type">Multiple Choice</span>
                <span className="difficulty-badge medium">Medium</span>
              </div>
              <div className="question-text">
                What happens when light passes from a denser medium to a rarer medium?
              </div>
              <div className="question-options">
                <div className="option">A) It bends towards the normal</div>
                <div className="option">B) It bends away from the normal</div>
                <div className="option">C) It travels in a straight line</div>
                <div className="option">D) It stops completely</div>
              </div>
              <div className="question-footer">
                <span className="correct-answer">Correct Answer: B</span>
                <span className="ai-confidence">AI Confidence: 95%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recently Generated */}
      <Card>
        <div className="card-header">
          <h3>Recently Generated</h3>
          <Button size="sm" variant="ghost">
            View All
          </Button>
        </div>
        <div className="recent-items">
          {recentlyGenerated.map(item => (
            <div key={item.id} className="recent-item">
              <div className="recent-item-info">
                <div className="recent-item-title">{item.title}</div>
                <div className="recent-item-meta">
                  <span>{item.type}</span>
                  <span>{item.count} questions</span>
                  <span>{item.difficulty}</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="recent-item-actions">
                <Button size="sm" variant="ghost" icon={<Edit3 size={16} />}>
                  Edit
                </Button>
                <Button size="sm" variant="ghost" icon={<Download size={16} />}>
                  Export
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAnswerChecker = () => (
    <div className="ai-tool-content">
      <div className="tool-header">
        <div className="tool-title-section">
          <h2>Answer Sheet Correction</h2>
          <p>AI-powered automatic correction with detailed feedback</p>
        </div>
        <Button variant="primary" icon={<Upload size={16} />}>
          Upload Answer Sheets
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="correction-stats">
        <Card className="stat-card">
          <div className="stat-icon stat-icon-blue">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">156</div>
            <div className="stat-label">Total Submissions</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-green">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">142</div>
            <div className="stat-label">Auto-Corrected</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-orange">
            <Brain size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">14</div>
            <div className="stat-label">Need Review</div>
          </div>
        </Card>
        
        <Card className="stat-card">
          <div className="stat-icon stat-icon-purple">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">94%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
        </Card>
      </div>

      {/* Correction Queue */}
      <Card>
        <div className="card-header">
          <h3>Correction Queue</h3>
          <div className="queue-filters">
            <Button size="sm" variant="ghost">All</Button>
            <Button size="sm" variant="ghost">Need Review</Button>
            <Button size="sm" variant="ghost">Completed</Button>
          </div>
        </div>
        <div className="correction-queue">
          {correctionQueue.map(item => (
            <div key={item.id} className="queue-item">
              <div className="queue-item-info">
                <div className="queue-item-title">{item.assignment}</div>
                <div className="queue-item-student">{item.student}</div>
                <div className="queue-item-meta">
                  Submitted: {item.submitted}
                </div>
              </div>
              <div className="queue-item-status">
                <div className={`status-badge status-${item.status}`}>
                  {item.status === 'ai-corrected' && <CheckCircle size={14} />}
                  {item.status === 'pending-review' && <Brain size={14} />}
                  {item.status === 'in-progress' && <Play size={14} />}
                  {item.status.replace('-', ' ').toUpperCase()}
                </div>
                {item.confidence && (
                  <div className="confidence-score">
                    AI Confidence: {item.confidence}%
                  </div>
                )}
              </div>
              <div className="queue-item-actions">
                <Button size="sm" variant="ghost">
                  {item.status === 'ai-corrected' ? 'View' : 'Review'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAssignmentCreator = () => (
    <div className="ai-tool-content">
      <div className="tool-header">
        <div className="tool-title-section">
          <h2>Assignment Creator</h2>
          <p>Create comprehensive assignments with AI assistance</p>
        </div>
        <Button variant="primary" icon={<Plus size={16} />}>
          Create New Assignment
        </Button>
      </div>

      {/* Template Gallery */}
      <Card>
        <div className="card-header">
          <h3>Assignment Templates</h3>
          <Button size="sm" variant="ghost">
            Browse All Templates
          </Button>
        </div>
        <div className="template-grid">
          <div className="template-card">
            <div className="template-icon">
              <FileText size={32} />
            </div>
            <div className="template-content">
              <h4>Chapter Assessment</h4>
              <p>Comprehensive test covering chapter concepts</p>
              <div className="template-features">
                <span>20-30 questions</span>
                <span>Mixed difficulty</span>
                <span>Auto-rubric</span>
              </div>
            </div>
            <Button size="sm" variant="secondary">Use Template</Button>
          </div>

          <div className="template-card">
            <div className="template-icon">
              <BookOpen size={32} />
            </div>
            <div className="template-content">
              <h4>Practice Quiz</h4>
              <p>Quick assessment for practice</p>
              <div className="template-features">
                <span>10-15 questions</span>
                <span>Immediate feedback</span>
                <span>Low stakes</span>
              </div>
            </div>
            <Button size="sm" variant="secondary">Use Template</Button>
          </div>

          <div className="template-card">
            <div className="template-icon">
              <Target size={32} />
            </div>
            <div className="template-content">
              <h4>Project Assignment</h4>
              <p>Long-form project with rubric</p>
              <div className="template-features">
                <span>Multi-part</span>
                <span>Detailed rubric</span>
                <span>Peer review</span>
              </div>
            </div>
            <Button size="sm" variant="secondary">Use Template</Button>
          </div>
        </div>
      </Card>

      {/* Recent Assignments */}
      <Card>
        <div className="card-header">
          <h3>Recent Assignments</h3>
          <Button size="sm" variant="ghost">
            View All
          </Button>
        </div>
        <div className="assignment-list">
          <div className="assignment-item">
            <div className="assignment-info">
              <div className="assignment-title">Light and Reflection Test</div>
              <div className="assignment-meta">
                <span>Physics</span>
                <span>25 questions</span>
                <span>Due: Jan 20, 2024</span>
              </div>
            </div>
            <div className="assignment-status">
              <span className="status-badge status-published">Published</span>
              <span className="submission-count">45/45 submitted</span>
            </div>
            <div className="assignment-actions">
              <Button size="sm" variant="ghost">Edit</Button>
              <Button size="sm" variant="ghost">Results</Button>
            </div>
          </div>

          <div className="assignment-item">
            <div className="assignment-info">
              <div className="assignment-title">Solar System Project</div>
              <div className="assignment-meta">
                <span>Physics</span>
                <span>Project</span>
                <span>Due: Jan 25, 2024</span>
              </div>
            </div>
            <div className="assignment-status">
              <span className="status-badge status-active">Active</span>
              <span className="submission-count">32/45 submitted</span>
            </div>
            <div className="assignment-actions">
              <Button size="sm" variant="ghost">Edit</Button>
              <Button size="sm" variant="ghost">Monitor</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderChapterSummarizer = () => (
    <div className="ai-tool-content">
      <div className="tool-header">
        <div className="tool-title-section">
          <h2>Chapter Summarizer</h2>
          <p>AI-powered summarization of any chapter, topic, or learning material</p>
        </div>
        <Button variant="primary" icon={<Sparkles size={16} />}>
          Generate Summary
        </Button>
      </div>

      <div className="generator-layout">
        {/* Settings Panel */}
        <Card className="generator-settings">
          <div className="card-header">
            <h3>Summarization Settings</h3>
            <Button size="sm" variant="ghost" icon={<Settings size={16} />}>
              Advanced
            </Button>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label>Subject</label>
              <select 
                value={summarizerSettings.subject}
                onChange={(e) => setSummarizerSettings(prev => ({...prev, subject: e.target.value}))}
                className="form-select"
              >
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
              </select>
            </div>

            <div className="form-group">
              <label>Chapter/Topic</label>
              <select 
                value={summarizerSettings.chapter}
                onChange={(e) => setSummarizerSettings(prev => ({...prev, chapter: e.target.value}))}
                className="form-select"
              >
                <option value="Light and Reflection">Light and Reflection</option>
                <option value="Solar System">Solar System</option>
                <option value="Motion and Forces">Motion and Forces</option>
                <option value="Electricity and Magnetism">Electricity and Magnetism</option>
                <option value="Waves and Sound">Waves and Sound</option>
              </select>
            </div>

            <div className="form-group">
              <label>Summary Type</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="summaryType" 
                    value="comprehensive"
                    checked={summarizerSettings.summaryType === 'comprehensive'}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, summaryType: e.target.value}))}
                  />
                  Comprehensive Overview
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="summaryType" 
                    value="student-notes"
                    checked={summarizerSettings.summaryType === 'student-notes'}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, summaryType: e.target.value}))}
                  />
                  Student-Friendly Notes
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="summaryType" 
                    value="teaching-guide"
                    checked={summarizerSettings.summaryType === 'teaching-guide'}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, summaryType: e.target.value}))}
                  />
                  Teaching Guide
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="summaryType" 
                    value="exam-prep"
                    checked={summarizerSettings.summaryType === 'exam-prep'}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, summaryType: e.target.value}))}
                  />
                  Exam Preparation
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Summary Length</label>
              <div className="difficulty-selector">
                {['short', 'medium', 'long'].map(length => (
                  <button
                    key={length}
                    className={`difficulty-btn ${summarizerSettings.length === length ? 'active' : ''}`}
                    onClick={() => setSummarizerSettings(prev => ({...prev, length: length}))}
                  >
                    {length.charAt(0).toUpperCase() + length.slice(1)}
                    <span className="length-indicator">
                      {length === 'short' && '200-300 words'}
                      {length === 'medium' && '400-600 words'}
                      {length === 'long' && '700-1000 words'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Include Options</label>
              <div className="checkbox-group">
                <label className="checkbox-option">
                  <input 
                    type="checkbox" 
                    checked={summarizerSettings.includeKeyPoints}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, includeKeyPoints: e.target.checked}))}
                  />
                  Key Learning Points
                </label>
                <label className="checkbox-option">
                  <input 
                    type="checkbox" 
                    checked={summarizerSettings.includeExamples}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, includeExamples: e.target.checked}))}
                  />
                  Real-world Examples
                </label>
                <label className="checkbox-option">
                  <input 
                    type="checkbox" 
                    checked={summarizerSettings.includeFormulas}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, includeFormulas: e.target.checked}))}
                  />
                  Important Formulas
                </label>
                <label className="checkbox-option">
                  <input 
                    type="checkbox" 
                    checked={summarizerSettings.includeDiagrams}
                    onChange={(e) => setSummarizerSettings(prev => ({...prev, includeDiagrams: e.target.checked}))}
                  />
                  Diagram Descriptions
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* Preview Panel */}
        <Card className="generator-preview summarizer-preview">
          <div className="card-header">
            <h3>Summary Preview</h3>
            <div className="preview-actions">
              <Button size="sm" variant="ghost" icon={<Copy size={16} />}>
                Copy
              </Button>
              <Button size="sm" variant="ghost" icon={<Save size={16} />}>
                Save Draft
              </Button>
              <Button size="sm" variant="secondary" icon={<Download size={16} />}>
                Export PDF
              </Button>
            </div>
          </div>
          <div className="preview-content">
            <div className="summary-preview">
              <div className="summary-header">
                <h4>Light and Reflection - Comprehensive Overview</h4>
                <div className="summary-meta">
                  <span className="word-count">~450 words</span>
                  <span className="reading-time">3 min read</span>
                  <span className="summary-type">Comprehensive</span>
                </div>
              </div>
              
              <div className="summary-content">
                <div className="summary-section">
                  <h5>🔍 Key Concepts</h5>
                  <p>Light is a form of electromagnetic radiation that enables us to see objects around us. When light falls on surfaces, it can be reflected, refracted, or absorbed...</p>
                </div>
                
                <div className="summary-section">
                  <h5>📚 Important Laws</h5>
                  <ul>
                    <li><strong>Law of Reflection:</strong> The angle of incidence equals the angle of reflection</li>
                    <li><strong>Refraction:</strong> Light bends when passing from one medium to another</li>
                    <li><strong>Total Internal Reflection:</strong> Complete reflection at the interface</li>
                  </ul>
                </div>
                
                <div className="summary-section">
                  <h5>🌟 Real-World Applications</h5>
                  <p>Mirrors in telescopes, fiber optic cables for internet, periscopes in submarines, and camera lenses all utilize the principles of light reflection and refraction...</p>
                </div>
                
                <div className="summary-section">
                  <h5>🔬 Key Formulas</h5>
                  <div className="formula-list">
                    <div className="formula-item">n₁sin θ₁ = n₂sin θ₂ (Snell's Law)</div>
                    <div className="formula-item">Critical angle: θc = sin⁻¹(n₂/n₁)</div>
                  </div>
                </div>
              </div>
              
              <div className="summary-footer">
                <div className="ai-confidence">
                  <Brain size={16} />
                  AI Confidence: 96%
                </div>
                <div className="summary-quality">
                  <Sparkles size={16} />
                  Quality Score: Excellent
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recently Generated Summaries */}
      <Card>
        <div className="card-header">
          <h3>Recent Summaries</h3>
          <Button size="sm" variant="ghost">
            View All
          </Button>
        </div>
        <div className="recent-items">
          {recentSummaries.map(item => (
            <div key={item.id} className="recent-item">
              <div className="recent-item-info">
                <div className="recent-item-title">{item.title}</div>
                <div className="recent-item-meta">
                  <span>{item.type}</span>
                  <span>{item.subject}</span>
                  <span>{item.wordsCount} words</span>
                  <span>{item.length}</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="recent-item-status">
                <span className={`status-badge status-${item.status}`}>
                  {item.status === 'completed' ? 'Ready' : 'Draft'}
                </span>
              </div>
              <div className="recent-item-actions">
                <Button size="sm" variant="ghost" icon={<Edit3 size={16} />}>
                  Edit
                </Button>
                <Button size="sm" variant="ghost" icon={<Download size={16} />}>
                  Export
                </Button>
                <Button size="sm" variant="ghost" icon={<Copy size={16} />}>
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="ai-tools-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title-section">
          <h1 className="page-title">AI-Assisted Tools</h1>
          <p className="page-subtitle">
            Leverage artificial intelligence to enhance your teaching workflow
          </p>
        </div>
      </div>

      {/* Tools Overview */}
      <div className="tools-overview">
        {tools.map(tool => {
          const Icon = tool.icon;
          return (
            <Card 
              key={tool.id} 
              className={`tool-overview-card ${activeTab === tool.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tool.id)}
            >
              <div className={`tool-icon tool-icon-${tool.color}`}>
                <Icon size={32} />
              </div>
              <div className="tool-content">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="tool-features">
                  {tool.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Tool Content */}
      <div className="tool-content-area">
        {activeTab === 'question-generator' && renderQuestionGenerator()}
        {activeTab === 'answer-checker' && renderAnswerChecker()}
        {activeTab === 'assignment-creator' && renderAssignmentCreator()}
        {activeTab === 'chapter-summarizer' && renderChapterSummarizer()}
      </div>
    </div>
  );
};

export default AITools;