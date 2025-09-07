import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import './Login.css';

const Login = () => {
  console.log('Login component is rendering');
  const [activeTab, setActiveTab] = useState('teacher');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, isAuthenticated, demoCredentials, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      const redirectPath = user?.role === 'administrator' ? '/admin/dashboard' : '/dashboard';
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, user]);

  // Auto-fill demo credentials when tab changes
  useEffect(() => {
    if (activeTab === 'teacher') {
      setFormData({
        username: demoCredentials.teacher.username,
        password: demoCredentials.teacher.password
      });
    } else {
      setFormData({
        username: demoCredentials.admin.username,
        password: demoCredentials.admin.password
      });
    }
    setError('');
  }, [activeTab, demoCredentials]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const result = await login(formData.username, formData.password);
      if (result.success) {
        navigate(result.redirectTo || '/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async (type) => {
    setIsSubmitting(true);
    const credentials = type === 'teacher' 
      ? demoCredentials.teacher 
      : demoCredentials.admin;
    
    try {
      const result = await login(credentials.username, credentials.password);
      if (result.success) {
        navigate(result.redirectTo || '/dashboard');
      }
    } catch (err) {
      setError('Demo login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>
      
      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <div className="logo-icon">📚</div>
              <h1>Teachers Portal</h1>
            </div>
            <p className="login-subtitle">
              Welcome to the Educational Management System
            </p>
          </div>

          {/* Role Tabs */}
          <div className="login-tabs">
            <button 
              className={`tab-button ${activeTab === 'teacher' ? 'active' : ''}`}
              onClick={() => setActiveTab('teacher')}
            >
              <span className="tab-icon">👩‍🏫</span>
              Teacher Login
            </button>
            <button 
              className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <span className="tab-icon">👨‍💼</span>
              Administrator
            </button>
          </div>

          {/* Demo Credentials Display */}
          <div className="demo-credentials">
            <div className="demo-header">
              <span className="demo-badge">DEMO</span>
              <span className="demo-text">Use these credentials for testing</span>
            </div>
            
            <div className="credentials-grid">
              <div className={`credential-card ${activeTab === 'teacher' ? 'active' : ''}`}>
                <h4>👩‍🏫 Teacher Demo</h4>
                <div className="credential-item">
                  <span>Username:</span>
                  <code onClick={() => copyToClipboard(demoCredentials.teacher.username)}>
                    {demoCredentials.teacher.username}
                  </code>
                </div>
                <div className="credential-item">
                  <span>Password:</span>
                  <code onClick={() => copyToClipboard(demoCredentials.teacher.password)}>
                    {demoCredentials.teacher.password}
                  </code>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('teacher')}
                  disabled={isSubmitting}
                >
                  Quick Login
                </Button>
              </div>

              <div className={`credential-card ${activeTab === 'admin' ? 'active' : ''}`}>
                <h4>👨‍💼 Admin Demo</h4>
                <div className="credential-item">
                  <span>Username:</span>
                  <code onClick={() => copyToClipboard(demoCredentials.admin.username)}>
                    {demoCredentials.admin.username}
                  </code>
                </div>
                <div className="credential-item">
                  <span>Password:</span>
                  <code onClick={() => copyToClipboard(demoCredentials.admin.password)}>
                    {demoCredentials.admin.password}
                  </code>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('admin')}
                  disabled={isSubmitting}
                >
                  Quick Login
                </Button>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <Input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
                required
                icon="👤"
              />
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                required
                icon="🔒"
              />
            </div>

            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                {error}
              </div>
            )}

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Signing In...' : `Sign In as ${activeTab === 'teacher' ? 'Teacher' : 'Administrator'}`}
            </Button>
          </form>

          <div className="login-footer">
            <p className="demo-note">
              🎯 This is a demo application with mock data for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;