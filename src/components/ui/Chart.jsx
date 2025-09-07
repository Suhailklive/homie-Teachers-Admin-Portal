import React from 'react';
import './Chart.css';

const Chart = ({ 
  type = 'bar', // 'bar', 'line', 'pie', 'doughnut', 'area'
  data = [],
  title,
  height = 300,
  showGrid = true,
  showLabels = true,
  showValues = false,
  colors = ['var(--chart-primary-color)', 'var(--chart-secondary-color)', 'var(--chart-accent-color)'],
  className = ''
}) => {
  if (!data || data.length === 0) {
    return (
      <div className={`chart-container ${className}`} style={{ height }}>
        <div className="chart-empty">
          <span>No data available</span>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...data.map(item => item.value || 0));
  const totalValue = data.reduce((sum, item) => sum + (item.value || 0), 0);

  const renderBarChart = () => {
    return (
      <div className="chart-bars">
        {data.map((item, index) => {
          const barHeight = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
          const color = colors[index % colors.length];
          
          return (
            <div key={index} className="bar-container">
              <div className="bar-wrapper">
                <div 
                  className="bar"
                  style={{ 
                    height: `${barHeight}%`,
                    backgroundColor: color
                  }}
                >
                  {showValues && (
                    <span className="bar-value">{item.value}%</span>
                  )}
                </div>
              </div>
              {showLabels && (
                <div className="bar-label">{item.label}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderLineChart = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = maxValue > 0 ? 100 - (item.value / maxValue) * 100 : 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="chart-line">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {showGrid && (
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--chart-grid-color)" strokeWidth="0.2"/>
              </pattern>
            </defs>
          )}
          {showGrid && <rect width="100" height="100" fill="url(#grid)" />}
          <polyline
            fill="none"
            stroke={colors[0]}
            strokeWidth="2"
            points={points}
          />
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = maxValue > 0 ? 100 - (item.value / maxValue) * 100 : 100;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill={colors[0]}
              />
            );
          })}
        </svg>
        {showLabels && (
          <div className="line-labels">
            {data.map((item, index) => (
              <div key={index} className="line-label" style={{ left: `${(index / (data.length - 1)) * 100}%` }}>
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderPieChart = () => {
    let cumulativePercentage = 0;
    
    return (
      <div className="chart-pie">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {data.map((item, index) => {
            const percentage = totalValue > 0 ? (item.value / totalValue) * 100 : 0;
            const angle = (percentage / 100) * 360;
            const startAngle = (cumulativePercentage / 100) * 360;
            const endAngle = startAngle + angle;
            
            const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
            const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
            const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
            const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            const pathData = [
              `M 100 100`,
              `L ${x1} ${y1}`,
              `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ');
            
            cumulativePercentage += percentage;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="var(--surface)"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        {showLabels && (
          <div className="pie-legend">
            {data.map((item, index) => (
              <div key={index} className="legend-item">
                <div 
                  className="legend-color"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <span className="legend-label">{item.label}</span>
                <span className="legend-value">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart();
      case 'pie':
      case 'doughnut':
        return renderPieChart();
      case 'bar':
      default:
        return renderBarChart();
    }
  };

  return (
    <div className={`chart-container ${className}`} style={{ height }}>
      {title && <div className="chart-title">{title}</div>}
      <div className="chart-content">
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;