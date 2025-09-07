import React from 'react';
import './Table.css';

const Table = ({ 
  columns, 
  data, 
  className = '',
  striped = false,
  hoverable = true,
  bordered = false,
  responsive = true,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  ...props 
}) => {
  const tableClasses = `
    table 
    ${striped ? 'table-striped' : ''}
    ${hoverable ? 'table-hoverable' : ''}
    ${bordered ? 'table-bordered' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const TableContent = () => (
    <table className={tableClasses} {...props}>
      <thead className="table-header">
        <tr>
          {columns.map((column, index) => (
            <th 
              key={column.key || index}
              className={`table-header-cell ${column.className || ''}`}
              style={{ width: column.width, textAlign: column.align }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {loading ? (
          <tr>
            <td colSpan={columns.length} className="table-loading">
              <div className="table-loading-content">
                <div className="loading-spinner"></div>
                <span>Loading...</span>
              </div>
            </td>
          </tr>
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="table-empty">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr 
              key={row.id || rowIndex}
              className={`table-row ${onRowClick ? 'table-row-clickable' : ''}`}
              onClick={() => onRowClick && onRowClick(row, rowIndex)}
            >
              {columns.map((column, colIndex) => (
                <td 
                  key={`${rowIndex}-${column.key || colIndex}`}
                  className={`table-cell ${column.className || ''}`}
                  style={{ textAlign: column.align }}
                >
                  {column.render 
                    ? column.render(row[column.dataIndex], row, rowIndex)
                    : row[column.dataIndex]
                  }
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );

  if (responsive) {
    return (
      <div className="table-container">
        <TableContent />
      </div>
    );
  }

  return <TableContent />;
};

export default Table;