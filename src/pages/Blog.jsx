import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import {
  fetchBlogPosts,
  categories,
  filterPostsByCategory
} from './blogApi';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const { posts: fetchedPosts, error: fetchError } = await fetchBlogPosts();
        if (fetchError) {
          setError(fetchError);
        } else {
          setPosts(fetchedPosts);
          setError(null);
        }
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  // Get all featured posts (sticky posts)
  const featuredPosts = posts.filter(p => p.sticky);
  const currentFeaturedPost = featuredPosts[currentFeaturedIndex];
  
  useEffect(() => {
    if (featuredPosts.length > 1) {
      const interval = setInterval(() => {
        setCurrentFeaturedIndex(prev => 
          (prev + 1) % featuredPosts.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [featuredPosts.length]);

  const filteredPosts = filterPostsByCategory(posts, selectedCategory);
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const handleDotClick = (index) => {
    setCurrentFeaturedIndex(index);
  };

  if (error) {
    return (
      <div className="blog">
        <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
          <div style={{ color: 'red' }}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog">
      <section className="trending-header">
        <div className="trending-text">
          // <div className='trending-item'><span className="parabole-letter special-letter">T</span>REN<span className="parabole-letter special-letter">D</span>ING</div>
          // <div className='trending-item'>H<span className="parabole-letter special-letter">O</span>T NEWS</div>
          // <div className='trending-item'><span className="parabole-letter special-letter">T</span>REN<span className="parabole-letter special-letter">D</span>ING</div>
          {/* // TRENDING // HOT NEWS // TRENDING */}
        </div>
      </section>

      {featuredPosts.length > 0 && currentFeaturedPost && (
        <section className="featured-post">
          <div className="container">
            <div className="featured-card">
              <div className="featured-image">
                <img src={currentFeaturedPost.image} alt={currentFeaturedPost.title} loading="lazy"/>
              </div>
              <div className="featured-content">
                <h2 className="featured-title">{currentFeaturedPost.title}</h2>
                <p className="featured-excerpt">{currentFeaturedPost.excerpt}</p>
                <div className="featured-meta">
                  <span className="featured-read-time">{currentFeaturedPost.readTime}</span>
                  <span className="featured-date">{currentFeaturedPost.date}</span>
                </div>
              </div>
            </div>
            
            {/* Show dots only if there are multiple featured posts */}
            {featuredPosts.length > 1 && (
              <div className="carousel-dots">
                {featuredPosts.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === currentFeaturedIndex ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    style={{ cursor: 'pointer' }}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="blog-content">
        <div className="container">
          <div className="blog-header">
            <h2 className="blog-section-title">BLOGS</h2>
            <div className="blog-controls">
              <div className="blog-filters">
                <span className="category-label">Category</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleCount(6);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="newest-btn">
                <span className="sort-icon">⚡</span>
                Newest First
              </button>
            </div>
          </div>

          <div className="blog-grid">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                  <div className="blog-content-area">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-meta">
                        <span className="category-tag">{post.category}</span>
                        <span className="blog-date">{post.date}</span>
                      </div>
                      <Link
                        className="read-tag"
                        to={`/blog/${post.slug}`}
                        state={{ post }}
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '50px', gridColumn: '1 / -1' }}>
                No posts found for the selected category.
              </div>
            )}
          </div>

          {/* View more / View less */}
          {filteredPosts.length > 6 && (
            <div className="view-more">
              {visibleCount < filteredPosts.length ? (
                <button
                  className="view-more-btn"
                  onClick={() => setVisibleCount(filteredPosts.length)}
                >
                  View more
                </button>
              ) : (
                <button
                  className="view-more-btn"
                  onClick={() => setVisibleCount(6)}
                >
                  View less
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;