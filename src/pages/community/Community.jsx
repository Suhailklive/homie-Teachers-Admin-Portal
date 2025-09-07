import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Plus, 
  Search, 
  Filter,
  Bookmark,
  TrendingUp,
  Calendar,
  User,
  ThumbsUp,
  Eye,
  Download,
  FileText,
  Image,
  Video,
  Link
} from 'lucide-react';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  // Mock data for community posts
  const communityPosts = [
    {
      id: 1,
      author: {
        name: 'Dr. Sarah Johnson',
        avatar: '/avatars/teacher1.jpg',
        title: 'Physics Teacher',
        school: 'Delhi Public School'
      },
      timestamp: '2 hours ago',
      category: 'Teaching Strategy',
      title: 'Revolutionary AI-Powered Assessment Techniques That Transformed My Classroom',
      content: 'After implementing AI-based assessment tools in my physics classes, I\'ve seen a 40% improvement in student engagement and understanding. Here\'s my complete strategy...',
      type: 'text',
      likes: 45,
      comments: 12,
      shares: 8,
      views: 234,
      tags: ['AI', 'Assessment', 'Physics', 'Engagement'],
      attachments: [
        { type: 'pdf', name: 'AI_Assessment_Guide.pdf', size: '2.4 MB' }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Prof. Michael Chen',
        avatar: '/avatars/teacher2.jpg',
        title: 'Mathematics Head',
        school: 'St. Xavier\'s School'
      },
      timestamp: '5 hours ago',
      category: 'Resource Sharing',
      title: 'Interactive Math Worksheets for Grade 7-8',
      content: 'Created these interactive worksheets using AI tools. Students love the gamified approach to learning algebra!',
      type: 'resource',
      likes: 67,
      comments: 23,
      shares: 15,
      views: 456,
      tags: ['Mathematics', 'Worksheets', 'Interactive', 'Algebra'],
      attachments: [
        { type: 'zip', name: 'Math_Worksheets_Pack.zip', size: '5.2 MB' }
      ]
    },
    {
      id: 3,
      author: {
        name: 'Ms. Emily Rodriguez',
        avatar: '/avatars/teacher3.jpg',
        title: 'English Teacher',
        school: 'Modern High School'
      },
      timestamp: '1 day ago',
      category: 'Success Story',
      title: 'How I Helped Shy Students Find Their Voice Using AI Conversation Partners',
      content: 'Sharing my experience with AI-powered conversation practice tools that helped introverted students gain confidence in speaking...',
      type: 'video',
      likes: 89,
      comments: 34,
      shares: 22,
      views: 678,
      tags: ['English', 'Speaking', 'Confidence', 'AI Tools'],
      videoThumbnail: '/thumbnails/speaking_confidence.jpg'
    }
  ];

  const trendingTopics = [
    { tag: 'AI Assessment', posts: 45, trend: '+25%' },
    { tag: 'Student Engagement', posts: 38, trend: '+18%' },
    { tag: 'Interactive Learning', posts: 32, trend: '+12%' },
    { tag: 'Personalized Education', posts: 28, trend: '+8%' },
    { tag: 'Digital Tools', posts: 24, trend: '+15%' }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Complete AI Teaching Toolkit',
      author: 'Homie AI Team',
      downloads: 1234,
      rating: 4.9,
      type: 'toolkit',
      description: 'Comprehensive guide with templates, examples, and best practices'
    },
    {
      id: 2,
      title: 'Student Engagement Strategies',
      author: 'Dr. Rachel Green',
      downloads: 892,
      rating: 4.7,
      type: 'guide',
      description: '20 proven techniques to increase classroom participation'
    },
    {
      id: 3,
      title: 'Assessment Rubrics Collection',
      author: 'Prof. David Kumar',
      downloads: 567,
      rating: 4.8,
      type: 'templates',
      description: 'Ready-to-use rubrics for various subjects and grade levels'
    }
  ];

  const communities = [
    {
      id: 1,
      name: 'AI in Education',
      members: 2340,
      posts: 156,
      description: 'Exploring the future of AI-powered teaching',
      isJoined: true
    },
    {
      id: 2,
      name: 'Physics Teachers United',
      members: 1890,
      posts: 203,
      description: 'Sharing experiments, resources, and teaching methods',
      isJoined: true
    },
    {
      id: 3,
      name: 'Student Assessment',
      members: 1456,
      posts: 98,
      description: 'Modern approaches to student evaluation',
      isJoined: false
    }
  ];

  const getPostTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'resource': return FileText;
      case 'image': return Image;
      default: return MessageSquare;
    }
  };

  const getAttachmentIcon = (type) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'zip': return Download;
      case 'link': return Link;
      default: return FileText;
    }
  };

  const filteredPosts = communityPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="community">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Teacher Community</h1>
          <p className="page-subtitle">Connect, share insights, and grow together with fellow educators</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <Users size={16} />
            Discover Communities
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setShowNewPostModal(true)}
          >
            <Plus size={16} />
            Share Insight
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="community-tabs">
        <button 
          className={`tab-button ${activeTab === 'feed' ? 'active' : ''}`}
          onClick={() => setActiveTab('feed')}
        >
          <MessageSquare size={16} />
          Community Feed
        </button>
        <button 
          className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          <FileText size={16} />
          Resource Library
        </button>
        <button 
          className={`tab-button ${activeTab === 'communities' ? 'active' : ''}`}
          onClick={() => setActiveTab('communities')}
        >
          <Users size={16} />
          My Communities
        </button>
        <button 
          className={`tab-button ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <TrendingUp size={16} />
          Trending
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Community Feed Tab */}
        {activeTab === 'feed' && (
          <div className="feed-section">
            <div className="feed-layout">
              {/* Main Feed */}
              <div className="main-feed">
                {/* Feed Filters */}
                <div className="feed-filters">
                  <div className="search-box">
                    <Search size={16} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search posts, topics, or authors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                  <select 
                    className="filter-select"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="Teaching Strategy">Teaching Strategy</option>
                    <option value="Resource Sharing">Resource Sharing</option>
                    <option value="Success Story">Success Story</option>
                    <option value="Question">Question</option>
                  </select>
                </div>

                {/* Posts */}
                <div className="posts-list">
                  {filteredPosts.map((post) => {
                    const PostTypeIcon = getPostTypeIcon(post.type);
                    return (
                      <div key={post.id} className="post-card">
                        <div className="post-header">
                          <div className="author-info">
                            <div className="author-avatar">
                              <img 
                                src={post.author.avatar} 
                                alt={post.author.name}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className="avatar-fallback" style={{ display: 'none' }}>
                                <User size={20} />
                              </div>
                            </div>
                            <div className="author-details">
                              <h4 className="author-name">{post.author.name}</h4>
                              <p className="author-title">{post.author.title} • {post.author.school}</p>
                              <span className="post-timestamp">{post.timestamp}</span>
                            </div>
                          </div>
                          <div className="post-category">
                            <PostTypeIcon size={14} />
                            {post.category}
                          </div>
                        </div>

                        <div className="post-content">
                          <h3 className="post-title">{post.title}</h3>
                          <p className="post-text">{post.content}</p>

                          {/* Video Thumbnail */}
                          {post.type === 'video' && post.videoThumbnail && (
                            <div className="video-thumbnail">
                              <img src={post.videoThumbnail} alt="Video thumbnail" />
                              <div className="play-overlay">
                                <Video size={32} />
                              </div>
                            </div>
                          )}

                          {/* Attachments */}
                          {post.attachments && post.attachments.length > 0 && (
                            <div className="post-attachments">
                              {post.attachments.map((attachment, index) => {
                                const AttachmentIcon = getAttachmentIcon(attachment.type);
                                return (
                                  <div key={index} className="attachment-item">
                                    <AttachmentIcon size={16} />
                                    <span className="attachment-name">{attachment.name}</span>
                                    <span className="attachment-size">({attachment.size})</span>
                                    <button className="attachment-download">
                                      <Download size={14} />
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Tags */}
                          <div className="post-tags">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="tag">#{tag}</span>
                            ))}
                          </div>
                        </div>

                        <div className="post-footer">
                          <div className="post-stats">
                            <span className="stat">
                              <Eye size={14} />
                              {post.views}
                            </span>
                            <span className="stat">
                              <ThumbsUp size={14} />
                              {post.likes}
                            </span>
                            <span className="stat">
                              <MessageSquare size={14} />
                              {post.comments}
                            </span>
                            <span className="stat">
                              <Share2 size={14} />
                              {post.shares}
                            </span>
                          </div>

                          <div className="post-actions">
                            <button className="action-btn">
                              <Heart size={16} />
                              Like
                            </button>
                            <button className="action-btn">
                              <MessageSquare size={16} />
                              Comment
                            </button>
                            <button className="action-btn">
                              <Share2 size={16} />
                              Share
                            </button>
                            <button className="action-btn">
                              <Bookmark size={16} />
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="feed-sidebar">
                {/* Trending Topics */}
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Trending Topics</h3>
                  <div className="trending-list">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="trending-item">
                        <div className="trending-info">
                          <span className="trending-tag">#{topic.tag}</span>
                          <span className="trending-posts">{topic.posts} posts</span>
                        </div>
                        <span className="trending-change positive">{topic.trend}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Communities */}
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Your Communities</h3>
                  <div className="quick-communities">
                    {communities.filter(c => c.isJoined).map((community) => (
                      <div key={community.id} className="quick-community">
                        <h4 className="community-name">{community.name}</h4>
                        <p className="community-stats">{community.members} members • {community.posts} posts</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resource Library Tab */}
        {activeTab === 'resources' && (
          <div className="resources-section">
            <div className="section-header">
              <h2 className="section-title">Featured Resources</h2>
              <div className="resource-filters">
                <select className="filter-select">
                  <option value="all">All Types</option>
                  <option value="toolkit">Toolkits</option>
                  <option value="guide">Guides</option>
                  <option value="templates">Templates</option>
                </select>
                <select className="filter-select">
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="resources-grid">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="resource-header">
                    <h3 className="resource-title">{resource.title}</h3>
                    <span className="resource-type">{resource.type}</span>
                  </div>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-meta">
                    <span className="resource-author">by {resource.author}</span>
                    <div className="resource-stats">
                      <span className="resource-downloads">
                        <Download size={14} />
                        {resource.downloads}
                      </span>
                      <span className="resource-rating">
                        <Star size={14} />
                        {resource.rating}
                      </span>
                    </div>
                  </div>
                  <div className="resource-actions">
                    <button className="btn btn-secondary btn-sm">Preview</button>
                    <button className="btn btn-primary btn-sm">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Communities Tab */}
        {activeTab === 'communities' && (
          <div className="communities-section">
            <div className="section-header">
              <h2 className="section-title">Educational Communities</h2>
              <button className="btn btn-primary">
                <Plus size={16} />
                Create Community
              </button>
            </div>

            <div className="communities-grid">
              {communities.map((community) => (
                <div key={community.id} className="community-card">
                  <div className="community-header">
                    <h3 className="community-name">{community.name}</h3>
                    <button className={`join-btn ${community.isJoined ? 'joined' : ''}`}>
                      {community.isJoined ? 'Joined' : 'Join'}
                    </button>
                  </div>
                  <p className="community-description">{community.description}</p>
                  <div className="community-stats">
                    <span>
                      <Users size={14} />
                      {community.members} members
                    </span>
                    <span>
                      <MessageSquare size={14} />
                      {community.posts} posts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trending Tab */}
        {activeTab === 'trending' && (
          <div className="trending-section">
            <h2 className="section-title">Trending in Education</h2>
            <div className="trending-content">
              <div className="trending-topics-detailed">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="trending-topic-card">
                    <div className="topic-rank">#{index + 1}</div>
                    <div className="topic-info">
                      <h3 className="topic-name">{topic.tag}</h3>
                      <p className="topic-stats">{topic.posts} posts this week</p>
                    </div>
                    <div className="topic-trend">
                      <TrendingUp size={16} />
                      <span>{topic.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;