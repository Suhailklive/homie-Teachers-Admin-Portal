import React, { createContext, useContext, useState, useEffect } from 'react';

// Demo credentials for easy testing
const DEMO_CREDENTIALS = {
  teacher: {
    username: 'teacher.demo',
    password: 'teacher123',
    role: 'teacher',
    profile: {
      name: 'Sunita Mehta',
      email: 'sunita.mehta@school.edu',
      avatar: '/avatars/teacher.jpg',
      department: 'Physics',
      classes: ['7A', '7B', '8A']
    }
  },
  admin: {
    username: 'admin.demo',
    password: 'admin123',
    role: 'administrator',
    profile: {
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@school.edu',
      avatar: '/avatars/admin.jpg',
      department: 'Administration',
      title: 'Principal'
    }
  }
};

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('teachersPortalUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('teachersPortalUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check teacher credentials
    if (username === DEMO_CREDENTIALS.teacher.username && 
        password === DEMO_CREDENTIALS.teacher.password) {
      const userData = {
        ...DEMO_CREDENTIALS.teacher,
        loginTime: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('teachersPortalUser', JSON.stringify(userData));
      setIsLoading(false);
      return { success: true, user: userData, redirectTo: '/dashboard' };
    }
    
    // Check admin credentials
    if (username === DEMO_CREDENTIALS.admin.username && 
        password === DEMO_CREDENTIALS.admin.password) {
      const userData = {
        ...DEMO_CREDENTIALS.admin,
        loginTime: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('teachersPortalUser', JSON.stringify(userData));
      setIsLoading(false);
      return { success: true, user: userData, redirectTo: '/admin/dashboard' };
    }
    
    // Invalid credentials
    setIsLoading(false);
    return { 
      success: false, 
      error: 'Invalid username or password. Please use the demo credentials provided.' 
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('teachersPortalUser');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const hasRole = (role) => {
    return user && user.role === role;
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated,
    hasRole,
    demoCredentials: DEMO_CREDENTIALS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;