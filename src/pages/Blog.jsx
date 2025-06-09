import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI and Blockchain Integration',
      excerpt: 'Exploring how artificial intelligence and blockchain technology are converging to create new possibilities...',
      author: 'Dr. Alex Chen',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '8 min read',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Decentralized AI: Democratizing Intelligent Insights',
      excerpt: 'How decentralized AI networks are making advanced analytics accessible to everyone...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Innovation',
      readTime: '6 min read',
      image: '🌐'
    },
    {
      id: 3,
      title: 'Privacy-Preserving Machine Learning on Blockchain',
      excerpt: 'Maintaining data privacy while leveraging the power of machine learning through blockchain technology...',
      author: 'Dr. Michael Roberts',
      date: '2024-01-08',
      category: 'Security',
      readTime: '10 min read',
      image: '🔒'
    },
    {
      id: 4,
      title: 'IGT Tokenomics: Understanding Our Token Economy',
      excerpt: 'A deep dive into the InSight Genesis Token economics and how it powers our ecosystem...',
      author: 'Lisa Park',
      date: '2024-01-05',
      category: 'Tokenomics',
      readTime: '7 min read',
      image: '💰'
    },
    {
      id: 5,
      title: 'Building Sustainable AI Solutions for Healthcare',
      excerpt: 'How our AI platform is revolutionizing healthcare analytics while ensuring patient privacy...',
      author: 'Dr. Alex Chen',
      date: '2024-01-03',
      category: 'Healthcare',
      readTime: '9 min read',
      image: '🏥'
    },
    {
      id: 6,
      title: 'The Role of Community in Decentralized AI Development',
      excerpt: 'How community governance and participation drive innovation in our decentralized AI platform...',
      author: 'Sarah Johnson',
      date: '2024-01-01',
      category: 'Community',
      readTime: '5 min read',
      image: '👥'
    }
  ];

  const categories = ['All', 'Technology', 'Innovation', 'Security', 'Tokenomics', 'Healthcare', 'Community'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog">
      <section className="blog-hero">
        <div className="container">
          <h1 className="page-title">InSight Genesis Blog</h1>
          <p className="page-subtitle">
            Latest insights, updates, and thoughts from our team
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <div className="blog-emoji">{post.image}</div>
                </div>
                <div className="blog-content-area">
                  <div className="blog-meta">
                    <span className="category-tag">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="author-info">
                      <span className="author-name">{post.author}</span>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <a href={`#post-${post.id}`} className="read-more">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest insights and updates</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 