# Testing Strategy for Teachers Portal

## Overview

This document outlines the testing strategy for the Teachers Portal application, including unit tests, integration tests, and end-to-end testing approaches.

## Testing Levels

### 1. Unit Testing

**Purpose**: Test individual components and functions in isolation

**Tools Recommended**:
- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers

**Setup Instructions**:

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom

# Add to package.json scripts
\"scripts\": {
  \"test\": \"jest\",
  \"test:watch\": \"jest --watch\",
  \"test:coverage\": \"jest --coverage\"
}
```

**Jest Configuration (jest.config.js)**:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/data/mockData.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

**Setup File (src/setupTests.js)**:

```javascript
import '@testing-library/jest-dom';

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Home: () => <div data-testid=\"home-icon\" />,
  User: () => <div data-testid=\"user-icon\" />,
  BarChart3: () => <div data-testid=\"chart-icon\" />,
  FileText: () => <div data-testid=\"file-icon\" />,
  // Add other icons as needed
}));

// Mock React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/dashboard'
  })
}));
```

### 2. Component Testing Examples

**Button Component Test**:

```javascript
// src/components/ui/__tests__/Button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct variant class', () => {
    render(<Button variant=\"primary\">Primary Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  test('shows loading state correctly', () => {
    render(<Button loading>Loading Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
```

**Dashboard Component Test**:

```javascript
// src/pages/dashboard/__tests__/Dashboard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ClassProvider } from '../../../contexts/ClassContext';
import Dashboard from '../Dashboard';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ClassProvider>
        {component}
      </ClassProvider>
    </BrowserRouter>
  );
};

describe('Dashboard Component', () => {
  test('renders overview dashboard by default', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('All Classes Overview')).toBeInTheDocument();
    expect(screen.getByText('Total Students')).toBeInTheDocument();
  });

  test('displays class performance metrics', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('Avg Performance')).toBeInTheDocument();
    expect(screen.getByText('Avg Completion')).toBeInTheDocument();
  });
});
```

### 3. Integration Testing

**Purpose**: Test component interactions and data flow

**Example - Class Selection Flow**:

```javascript
// src/__tests__/ClassSelection.integration.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Class Selection Integration', () => {
  test('user can switch between classes', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Should start with overview
    expect(screen.getByText('All Classes Overview')).toBeInTheDocument();

    // Click on class switcher
    fireEvent.click(screen.getByTestId('class-switcher'));
    
    // Select a specific class
    fireEvent.click(screen.getByText('Physics - Grade 7A'));
    
    // Should switch to individual class view
    await waitFor(() => {
      expect(screen.getByText('Physics - Grade 7A')).toBeInTheDocument();
    });
  });
});
```

### 4. Cross-Browser Testing

**Manual Testing Matrix**:

| Feature | Chrome 90+ | Firefox 88+ | Safari 14+ | Edge 90+ |
|---------|------------|-------------|------------|----------|
| Dashboard Load | ✅ | ✅ | ✅ | ✅ |
| Class Switching | ✅ | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ | ✅ |
| Form Validation | ✅ | ✅ | ✅ | ✅ |
| Charts Display | ✅ | ✅ | ✅ | ✅ |

**Automated Cross-Browser Testing Setup**:

```javascript
// cypress.config.js (if using Cypress)
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:5174',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  component: {
    devServer: {
      framework: 'vite',
      bundler: 'vite'
    }
  }
};
```

### 5. Performance Testing

**Lighthouse CI Setup**:

```bash
# Install Lighthouse CI
npm install --save-dev @lhci/cli

# Create lighthouse config
echo '{
  \"ci\": {
    \"collect\": {
      \"startServerCommand\": \"npm run preview\",
      \"url\": [\"http://localhost:4173\"]
    },
    \"assert\": {
      \"assertions\": {
        \"categories:performance\": [\"error\", {\"minScore\": 0.9}],
        \"categories:accessibility\": [\"error\", {\"minScore\": 0.95}],
        \"categories:best-practices\": [\"error\", {\"minScore\": 0.9}],
        \"categories:seo\": [\"error\", {\"minScore\": 0.9}]
      }
    }
  }
}' > lighthouserc.json

# Add to package.json
\"scripts\": {
  \"lighthouse\": \"lhci autorun\"
}
```

**Bundle Size Testing**:

```bash
# Install bundlesize
npm install --save-dev bundlesize

# Add to package.json
\"bundlesize\": [
  {
    \"path\": \"dist/assets/*.js\",
    \"maxSize\": \"400kb\"
  },
  {
    \"path\": \"dist/assets/*.css\",
    \"maxSize\": \"150kb\"
  }
],
\"scripts\": {
  \"test:size\": \"bundlesize\"
}
```

### 6. Accessibility Testing

**Automated Accessibility Testing**:

```bash
# Install axe-core testing library
npm install --save-dev @axe-core/react jest-axe
```

**Accessibility Test Example**:

```javascript
// src/__tests__/accessibility.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Dashboard from '../pages/dashboard/Dashboard';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  test('Dashboard should not have accessibility violations', async () => {
    const { container } = render(<Dashboard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### 7. Test Organization

**Directory Structure**:

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── __tests__/
│   │       └── Button.test.jsx
│   └── layout/
│       ├── Header.jsx
│       └── __tests__/
│           └── Header.test.jsx
├── pages/
│   ├── dashboard/
│   │   ├── Dashboard.jsx
│   │   └── __tests__/
│   │       └── Dashboard.test.jsx
├── __tests__/
│   ├── setup.js
│   └── integration/
│       └── *.integration.test.jsx
└── setupTests.js
```

### 8. Continuous Integration

**GitHub Actions Workflow (.github/workflows/test.yml)**:

```yaml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm run test:coverage
    
    - name: Build application
      run: npm run build
    
    - name: Run bundle size check
      run: npm run test:size
    
    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
```

### 9. Testing Best Practices

**Component Testing Guidelines**:

1. **Test behavior, not implementation**
2. **Use realistic user interactions**
3. **Test error states and edge cases**
4. **Mock external dependencies**
5. **Write descriptive test names**

**Example Test Structure**:

```javascript
describe('ComponentName', () => {
  describe('when rendering', () => {
    test('should display expected elements', () => {
      // Test rendering
    });
  });

  describe('when user interacts', () => {
    test('should handle click events', () => {
      // Test interactions
    });
  });

  describe('when props change', () => {
    test('should update display accordingly', () => {
      // Test prop changes
    });
  });

  describe('error handling', () => {
    test('should display error state', () => {
      // Test error scenarios
    });
  });
});
```

### 10. Implementation Priority

**Phase 1: Essential Testing**
- [ ] Setup Jest and React Testing Library
- [ ] Test critical components (Button, Modal, Header)
- [ ] Test main pages (Dashboard, Assessment)
- [ ] Setup CI/CD pipeline

**Phase 2: Comprehensive Testing**
- [ ] Integration tests for user flows
- [ ] Cross-browser testing setup
- [ ] Performance testing with Lighthouse
- [ ] Accessibility testing

**Phase 3: Advanced Testing**
- [ ] End-to-end testing with Cypress
- [ ] Visual regression testing
- [ ] Load testing for performance
- [ ] Security testing

### 11. Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- Button.test.jsx

# Run tests matching pattern
npm test -- --testNamePattern=\"render\"
```

This testing strategy provides a comprehensive approach to ensuring the quality and reliability of the Teachers Portal application across different browsers and devices.