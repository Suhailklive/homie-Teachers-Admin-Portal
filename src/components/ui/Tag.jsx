import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import Badge from './Badge';
import './Tag.css';

const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  removable = false,
  onRemove,
  className = '',
  ...props
}) => {
  return (
    <Badge 
      variant={variant}
      size={size}
      removable={removable}
      onRemove={onRemove}
      className={`tag ${className}`}
      {...props}
    >
      {children}
    </Badge>
  );
};

const TagInput = ({ 
  tags = [], 
  onTagsChange, 
  placeholder = 'Add tags...',
  maxTags,
  allowDuplicates = false,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const addTag = (tagText) => {
    const trimmedTag = tagText.trim();
    if (!trimmedTag) return;
    
    if (maxTags && tags.length >= maxTags) return;
    if (!allowDuplicates && tags.includes(trimmedTag)) return;
    
    const newTags = [...tags, trimmedTag];
    onTagsChange(newTags);
    setInputValue('');
  };

  const removeTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    onTagsChange(newTags);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    if (inputValue.trim()) {
      addTag(inputValue);
    }
  };

  return (
    <div className={`tag-input-container ${className} ${isInputFocused ? 'focused' : ''}`}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          variant={variant}
          size={size}
          removable
          onRemove={() => removeTag(index)}
        >
          {tag}
        </Tag>
      ))}
      <input
        type=\"text\"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsInputFocused(true)}
        onBlur={handleInputBlur}
        placeholder={tags.length === 0 ? placeholder : ''}
        className=\"tag-input\"
        disabled={maxTags && tags.length >= maxTags}
      />
    </div>
  );
};

const TagCloud = ({ 
  tags = [], 
  onTagClick,
  maxDisplayed,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedTags = maxDisplayed && !showAll 
    ? tags.slice(0, maxDisplayed)
    : tags;
  
  const hiddenCount = maxDisplayed && !showAll 
    ? Math.max(0, tags.length - maxDisplayed)
    : 0;

  return (
    <div className={`tag-cloud ${className}`}>
      {displayedTags.map((tag, index) => (
        <Tag
          key={index}
          variant={variant}
          size={size}
          className={onTagClick ? 'interactive' : ''}
          onClick={() => onTagClick && onTagClick(tag, index)}
        >
          {typeof tag === 'string' ? tag : tag.name}
        </Tag>
      ))}
      {hiddenCount > 0 && (
        <Tag
          variant=\"default\"
          size={size}
          className=\"interactive\"
          onClick={() => setShowAll(true)}
        >
          <Plus size={12} />
          {hiddenCount} more
        </Tag>
      )}
    </div>
  );
};

const TagFilter = ({ 
  availableTags = [],
  selectedTags = [],
  onSelectionChange,
  multiSelect = true,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const handleTagClick = (tag) => {
    if (multiSelect) {
      const isSelected = selectedTags.includes(tag);
      const newSelection = isSelected
        ? selectedTags.filter(t => t !== tag)
        : [...selectedTags, tag];
      onSelectionChange(newSelection);
    } else {
      onSelectionChange(selectedTags.includes(tag) ? [] : [tag]);
    }
  };

  return (
    <div className={`tag-filter ${className}`}>
      {availableTags.map((tag, index) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <Tag
            key={index}
            variant={isSelected ? 'primary' : variant}
            size={size}
            className=\"interactive\"
            onClick={() => handleTagClick(tag)}
          >
            {typeof tag === 'string' ? tag : tag.name}
          </Tag>
        );
      })}
    </div>
  );
};

// Export all components
Tag.Input = TagInput;
Tag.Cloud = TagCloud;
Tag.Filter = TagFilter;

export default Tag;
export { TagInput, TagCloud, TagFilter };"