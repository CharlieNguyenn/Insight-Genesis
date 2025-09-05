import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './BlogDetail.css';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from './blogApi';

// Sanitize and trim WordPress HTML: remove first heading paragraph and first image
const sanitizeAndTrimContent = (htmlString) => {
    if (!htmlString) return '';
    const container = document.createElement('div');
    container.innerHTML = htmlString;

    // Remove unsafe tags
    container.querySelectorAll('script, style, iframe').forEach((el) => el.remove());

    // Remove the first paragraph
    const firstParagraph = container.querySelector('p');
    if (firstParagraph) firstParagraph.remove();

    // Remove the first image block
    const firstImageBlock = container.querySelector('div.wp-block-image');
    if (firstImageBlock) {
        firstImageBlock.remove();
    } else {
        const firstImg = container.querySelector('img');
        if (firstImg) {
            const figureParent = firstImg.closest('figure');
            if (figureParent) figureParent.remove();
            else firstImg.remove();
        }
    }

    // Remove tất cả wp-block-spacer elements
    container.querySelectorAll('.wp-block-spacer, div[class*="wp-block-spacer"]').forEach((spacer) => {
        spacer.remove();
    });

    // *** Xử lý paragraphs chứa chỉ strong elements ***
    container.querySelectorAll('p').forEach((p) => {
        const children = Array.from(p.childNodes).filter(node => 
            node.nodeType === Node.TEXT_NODE && node.textContent.trim() ||
            node.nodeType === Node.ELEMENT_NODE
        );
        
        if (children.length === 1 && 
            children[0].nodeType === Node.ELEMENT_NODE && 
            children[0].tagName.toLowerCase() === 'strong') {
            
            const heading = document.createElement('h3');
            heading.textContent = children[0].textContent;
            p.replaceWith(heading);
        }
    });

    // Performance: lazy-load remaining images
    container.querySelectorAll('img').forEach((img) => {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
    });

    return container.innerHTML.trim();
};

const BlogDetail = () => {
    const { state } = useLocation();
    const { slug } = useParams();
    const post = state?.post;
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 3;

    useEffect(() => {
        const loadRelatedPosts = async () => {
            try {
                const { posts } = await fetchBlogPosts();
                const filteredPosts = posts
                    .filter(p => p.slug !== slug && p.category === post.category);
                setRelatedPosts(filteredPosts);
                setCurrentPage(0);
            } catch (err) {
                console.error('Error loading related posts:', err);
            } finally {
                setLoading(false);
            }
        };

        if (post) {
            loadRelatedPosts();
        }
    }, [post, slug]);

    const pageCount = useMemo(() => {
        return Math.ceil(relatedPosts.length / pageSize) || 0;
    }, [relatedPosts.length]);

    const displayedPosts = useMemo(() => {
        const startIndex = currentPage * pageSize;
        return relatedPosts.slice(startIndex, startIndex + pageSize);
    }, [relatedPosts, currentPage]);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(0, prev - 1));
    };

    const handleNextPage = () => {
        if (pageCount === 0) return;
        setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
    };

    const cleanedContentHtml = useMemo(() => {
        try {
            return sanitizeAndTrimContent(post?.contentHtml || '');
        } catch {
            return '';
        }
    }, [post?.contentHtml]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!post) {
        return (
            <div className="blog-detail">
                <div className="empty-state">
                    <h2>Blog not found</h2>
                    <p>Sorry, the blog you are looking for does not exist..</p>
                    <Link to="/blog" className="read-tag">Quay lại Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail">
            {/* Header Section */}
            <section className="detail-header">
                <div className="container">
                    {/* Modern Back Button */}
                    <div className='detail_header--container'>
                        <Link to="/blog" className="back-button" title="Quay lại danh sách blog" />
                        <h1 className="detail-title">{post.title}</h1>
                    </div>
                    <div className="detail-text">
                        <p className="detail-paragraph">{post.excerpt}</p>
                    </div>
                    <div className="detail-meta">
                        <span className="detail-tag">{post.category}</span>
                        <span className="detail-date">{post.date}</span>
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className="detail-img">
                <div className="container">
                    <div className="detail-image">
                        <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="detail">
                <div className="container">
                    <div
                        className="detail-content"
                        dangerouslySetInnerHTML={{ __html: cleanedContentHtml }}
                    />
                </div>
            </section>

            {/* Related Posts Section */}
            <section className="related-posts">
                <div className="container">
                    <h2 className="related-title">Related Blogs</h2>
                    <div className="blog-grid">
                        {loading ? (
                            <div className="loading-state">
                                <p>Loading related blogs</p>
                            </div>
                        ) : relatedPosts.length > 0 ? (
                            displayedPosts.map((relatedPost) => (
                                <article key={relatedPost.id} className="blog-card">
                                    <div className="blog-image">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="blog-content-area">
                                        <h3 className="blog-title">{relatedPost.title}</h3>
                                        <p className="blog-excerpt">{relatedPost.excerpt}</p>
                                        <div className="blog-footer">
                                            <div className="blog-meta">
                                                <span className="category-tag">{relatedPost.category}</span>
                                                <span className="blog-date">{relatedPost.date}</span>
                                            </div>
                                            <Link
                                                className="read-tag"
                                                to={`/blog/${relatedPost.slug}`}
                                                state={{ post: relatedPost }}
                                            >
                                                Read
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="empty-state">
                                <p>No related blogs found.</p>
                            </div>
                        )}
                    </div>
                    {pageCount > 1 && (
                        <div className="related-pagination" style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
                            <button className="pagination" onClick={handlePrevPage} disabled={currentPage === 0}>
                                Prev
                            </button>
                            <span className="page-indicator">{currentPage + 1} / {pageCount}</span>
                            <button className="pagination" onClick={handleNextPage} disabled={currentPage >= pageCount - 1}>
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;