import React from 'react';
import './Charts.css';

// Progress Bar Component
export const ProgressBar = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'primary',
  showLabel = false,
  label,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`progress-container progress-${size} ${className}`}>
      {(showLabel || label) && (
        <div className="progress-label">
          <span className="progress-label-text">{label}</span>
          <span className="progress-percentage">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`progress-track progress-${color}`}>
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

// Circular Progress Component
export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'primary',
  showLabel = true,
  thickness = 4,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = size === 'sm' ? 20 : size === 'lg' ? 40 : 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  const svgSize = radius * 2 + thickness * 2;
  
  return (
    <div className={`circular-progress circular-progress-${size} ${className}`}>
      <svg 
        width={svgSize} 
        height={svgSize}
        className="circular-progress-svg"
      >
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          className="circular-progress-track"
          strokeWidth={thickness}
        />
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          className={`circular-progress-fill circular-progress-${color}`}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${svgSize / 2} ${svgSize / 2})`}
        />
      </svg>
      {showLabel && (
        <div className="circular-progress-label">
          <span className="circular-progress-percentage">{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
};

// Simple Bar Chart Component
export const BarChart = ({
  data = [],
  height = 200,
  color = 'primary',
  showLabels = true,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className={`bar-chart ${className}`} style={{ height }}>
      <div className="bar-chart-container">
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * (height - 40);
          return (
            <div key={index} className="bar-chart-item">
              <div 
                className={`bar bar-${color}`}
                style={{ height: `${barHeight}px` }}
                title={`${item.label}: ${item.value}`}
              >
                <div className="bar-value">{item.value}</div>
              </div>
              {showLabels && (
                <div className="bar-label">{item.label}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Line Chart Component (Simple)
export const LineChart = ({
  data = [],
  height = 200,
  color = 'primary',
  showPoints = true,
  showLabels = true,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const valueRange = maxValue - minValue || 1;
  
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.value - minValue) / valueRange) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <div className={`line-chart ${className}`} style={{ height }}>
      <svg className="line-chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          className={`line-chart-line line-chart-${color}`}
          fill="none"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {showPoints && data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.value - minValue) / valueRange) * 100;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              className={`line-chart-point line-chart-${color}`}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
      {showLabels && (
        <div className="line-chart-labels">
          {data.map((item, index) => (
            <div key={index} className="line-chart-label">
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Donut Chart Component
export const DonutChart = ({
  data = [],
  size = 120,
  thickness = 20,
  showLabels = true,
  showLegend = false,
  className = ''
}) => {
  if (!data || data.length === 0) return null;
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  
  let accumulatedPercentage = 0;
  
  const colors = [
    'var(--primary-blue)',
    'var(--success)',
    'var(--warning)',
    'var(--error)',
    'var(--gray-400)',
    'var(--brand-secondary)',
    'var(--brand-accent)'
  ];
  
  return (
    <div className={`donut-chart ${className}`}>
      <svg width={size} height={size} className="donut-chart-svg">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
          const strokeDashoffset = -accumulatedPercentage / 100 * circumference;
          accumulatedPercentage += percentage;
          
          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={colors[index % colors.length]}
              strokeWidth={thickness}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              className="donut-segment"
            />
          );
        })}
      </svg>
      
      {showLabels && (
        <div className="donut-center-label">
          <div className="donut-total">{total}</div>
          <div className="donut-total-label">Total</div>
        </div>
      )}
      
      {showLegend && (
        <div className="donut-legend">
          {data.map((item, index) => (
            <div key={index} className="donut-legend-item">
              <div 
                className="donut-legend-color"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="donut-legend-label">{item.label}</span>
              <span className="donut-legend-value">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Gauge Chart Component
export const GaugeChart = ({
  value = 0,
  max = 100,
  min = 0,
  size = 120,
  color = 'primary',
  showLabel = true,
  label,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const angle = percentage * 180; // Half circle
  const radius = size / 2 - 10;
  
  return (
    <div className={`gauge-chart ${className}`} style={{ width: size, height: size / 2 + 30 }}>
      <svg width={size} height={size / 2 + 30} className="gauge-chart-svg">
        {/* Background arc */}
        <path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 10} ${size / 2}`}
          fill="none"
          stroke="var(--gray-200)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${10 + radius * 2 * percentage} ${size / 2 - radius * Math.sin(Math.PI * percentage)}`}
          fill="none"
          stroke={`var(--${color === 'primary' ? 'primary-blue' : color})`}
          strokeWidth="8"
          strokeLinecap="round"
          className="gauge-progress"
        />
        {/* Needle */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + (radius - 20) * Math.cos((angle - 90) * Math.PI / 180)}
          y2={size / 2 + (radius - 20) * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="var(--text-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r="4"
          fill="var(--text-primary)"
        />
      </svg>
      
      {showLabel && (
        <div className="gauge-label">
          <div className="gauge-value">{value}</div>
          {label && <div className="gauge-label-text">{label}</div>}
        </div>
      )}
    </div>
  );
};

export default {
  ProgressBar,
  CircularProgress,
  BarChart,
  LineChart,
  DonutChart,
  GaugeChart
};