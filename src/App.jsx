import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ClassProvider } from './contexts/ClassContext';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ClassProvider>
          <AppRouter />
        </ClassProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
