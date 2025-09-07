# Component Documentation

## Overview

This document provides comprehensive documentation for all React components in the Teachers Portal application. Each component is designed to be reusable, accessible, and follows modern React best practices.

## Layout Components

### Header Component
**Location**: `src/components/layout/Header.jsx`

The main navigation header that provides global navigation and user information.

**Props**:
- `onMenuToggle` (function): Callback for mobile menu toggle
- `currentClass` (object): Currently selected class information
- `classes` (array): List of available classes

**Features**:
- Responsive design with mobile hamburger menu
- Class selection dropdown
- Notification bell with badge
- User profile dropdown
- Breadcrumb integration

**Usage Example**:
```jsx
import Header from './components/layout/Header';

<Header 
  onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
  currentClass={selectedClass}
  classes={availableClasses}
/>
```

### Sidebar Component
**Location**: `src/components/layout/Sidebar.jsx`

Navigation sidebar with main application routes and quick actions.

**Props**:
- `activeItem` (string): Currently active navigation item
- `onItemClick` (function): Navigation item click handler
- `isOpen` (boolean): Mobile sidebar open state

**Navigation Items**:
- Dashboard
- Assessment & Results
- AI Tools
- Student Talent
- Teacher Training
- Community
- Reports
- Parent Updates

**Usage Example**:
```jsx
import Sidebar from './components/layout/Sidebar';

<Sidebar 
  activeItem="dashboard"
  onItemClick={(itemId, path) => navigate(path)}
  isOpen={sidebarOpen}
/>
```

### Layout Component
**Location**: `src/components/layout/Layout.jsx`

Main layout wrapper that combines header, sidebar, and page content.

**Features**:
- Responsive layout management
- Mobile sidebar overlay
- Breadcrumb navigation integration
- Content area management

## UI Components

### Button Component
**Location**: `src/components/ui/Button.jsx`

Versatile button component with multiple variants and sizes.

**Props**:
- `variant` (string): 'primary' | 'secondary' | 'ghost' | 'error' | 'success'
- `size` (string): 'sm' | 'md' | 'lg' | 'xl'
- `loading` (boolean): Shows loading spinner
- `disabled` (boolean): Disables button interaction
- `children` (node): Button content

**Usage Example**:
```jsx
import Button from './components/ui/Button';

<Button variant="primary" size="lg" loading={isSubmitting}>
  Save Changes
</Button>
```

### Card Component
**Location**: `src/components/ui/Card.jsx`

Container component for grouping related content.

**Props**:
- `title` (string): Card header title
- `subtitle` (string): Card header subtitle
- `actions` (node): Header action buttons
- `children` (node): Card content

**Usage Example**:
```jsx
import Card from './components/ui/Card';

<Card 
  title="Student Performance" 
  subtitle="Last 30 days"
  actions={<Button variant="ghost">View All</Button>}
>
  <PerformanceChart data={chartData} />
</Card>
```

### Table Component
**Location**: `src/components/ui/Table.jsx`

Data table with sorting, filtering, and pagination capabilities.

**Props**:
- `columns` (array): Column definitions
- `data` (array): Table data
- `loading` (boolean): Loading state
- `sortable` (boolean): Enable sorting
- `pagination` (object): Pagination configuration

**Column Definition**:
```javascript
const columns = [
  {
    key: 'name',
    title: 'Student Name',
    sortable: true,
    render: (value, row) => <span>{value}</span>
  }
];
```

### Modal Component
**Location**: `src/components/ui/Modal.jsx`

Accessible modal dialog with backdrop and keyboard navigation.

**Props**:
- `isOpen` (boolean): Modal visibility
- `onClose` (function): Close handler
- `title` (string): Modal title
- `size` (string): 'sm' | 'md' | 'lg' | 'xl'
- `children` (node): Modal content

**Features**:
- Escape key handling
- Focus management
- Backdrop click to close
- Accessible ARIA attributes

### Charts Components
**Location**: `src/components/ui/Charts.jsx`

Collection of data visualization components.

**Available Charts**:
- `ProgressBar`: Linear progress indicator
- `CircularProgress`: Circular progress indicator
- `BarChart`: Simple bar chart visualization
- `LineChart`: Line chart for trends
- `DonutChart`: Donut/pie chart
- `GaugeChart`: Gauge meter visualization

**Usage Example**:
```jsx
import { ProgressBar, BarChart } from './components/ui/Charts';

<ProgressBar value={75} max={100} label="Completion Rate" />
<BarChart data={performanceData} height={300} />
```

## Common Components

### Breadcrumb Component
**Location**: `src/components/common/Breadcrumb.jsx`

Dynamic breadcrumb navigation based on current route.

**Features**:
- Automatic route detection
- Customizable icons
- Responsive design
- Accessible navigation

**Route Mapping**:
```javascript
const routeMap = {
  '/dashboard': { label: 'Dashboard', icon: <Home /> },
  '/assessment': { label: 'Assessment', icon: <FileText /> },
  '/ai-tools': { label: 'AI Tools', icon: <Brain /> }
};
```

## Context Providers

### ClassContext
**Location**: `src/contexts/ClassContext.jsx`

Global state management for class selection and switching.

**Provided Values**:
- `currentClass`: Currently selected class
- `viewMode`: 'overview' | 'individual'
- `classes`: Array of available classes
- `selectClass(classId)`: Class selection function
- `goToOverview()`: Return to overview mode
- `getOverviewStats()`: Calculate overview statistics

**Usage Example**:
```jsx
import { useClass } from './contexts/ClassContext';

function Dashboard() {
  const { currentClass, selectClass, viewMode } = useClass();
  
  return (
    <div>
      {viewMode === 'overview' ? (
        <OverviewDashboard />
      ) : (
        <IndividualDashboard classData={currentClass} />
      )}
    </div>
  );
}
```

## Styling Guidelines

### CSS Architecture

**Design System**: `src/styles/design-system.css`
- CSS custom properties for colors, typography, spacing
- Global utilities and reset styles
- Responsive breakpoints and utilities

**Component Tokens**: `src/styles/component-tokens.css`
- Component-specific design tokens
- Status and semantic color definitions
- Animation and transition utilities

**Component Styles**: Individual `.css` files per component
- BEM-inspired naming convention
- Responsive design patterns
- Accessibility considerations

### Design Tokens

**Colors**:
```css
--primary-blue: #4F7EF7;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
```

**Typography**:
```css
--font-family: Inter, system-ui, sans-serif;
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
```

**Spacing**:
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
```

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Color Contrast**: All text meets minimum contrast ratios
**Keyboard Navigation**: All interactive elements are keyboard accessible
**Screen Readers**: Proper ARIA labels and semantic HTML
**Focus Management**: Visible focus indicators and logical tab order

### Implementation Examples

**Button with ARIA**:
```jsx
<button 
  aria-label="Close modal"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <X size={16} />
</button>
```

**Form with Labels**:
```jsx
<label htmlFor="student-name">Student Name</label>
<input 
  id="student-name"
  type="text"
  aria-required="true"
  aria-describedby="name-error"
/>
```

## Performance Optimization

### Component Best Practices

**Memoization**: Use `React.memo` for expensive components
**Lazy Loading**: Implement code splitting for large components
**Virtual Scrolling**: For large data lists
**Image Optimization**: Proper sizing and lazy loading

### Bundle Optimization

**Tree Shaking**: Import only used utilities
**Code Splitting**: Route-based splitting implemented
**Asset Optimization**: Automatic minification and compression

## Testing Guidelines

### Component Testing

**Unit Tests**: Test component props, state, and behavior
**Integration Tests**: Test component interactions
**Accessibility Tests**: Verify ARIA attributes and keyboard navigation

### Testing Example

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

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
```

## Migration Guide

### Upgrading Components

When updating components, follow these guidelines:

1. **Maintain Backward Compatibility**: Preserve existing prop interfaces
2. **Add Deprecation Warnings**: For props being removed
3. **Update Documentation**: Include migration examples
4. **Test Thoroughly**: Ensure no breaking changes

### Version History

**v1.0.0**: Initial component library
- Core layout components
- Essential UI components
- Basic styling system

## Contributing

### Component Creation Checklist

- [ ] Component follows naming conventions
- [ ] Props are properly typed and documented
- [ ] Accessibility features implemented
- [ ] Responsive design considered
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Examples provided

### Code Review Guidelines

- **Functionality**: Does the component work as expected?
- **Accessibility**: Are ARIA attributes and keyboard navigation implemented?
- **Performance**: Are there any performance concerns?
- **Design**: Does it match the design system?
- **Documentation**: Is the component properly documented?

---

*This documentation is maintained by the Teachers Portal development team. For questions or updates, please refer to the project repository.*