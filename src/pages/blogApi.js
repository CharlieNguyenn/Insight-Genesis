import blogImage from '../assets/blog.png';
import blogImage1 from '../assets/blog1.png';
import blogImage2 from '../assets/blog2.png';
import blogImage3 from '../assets/blog3.png';
import blogImage4 from '../assets/blog4.png';
import blogImage5 from '../assets/blog5.png';
import blogImage6 from '../assets/blog6.png';

// Fallback images for posts without featured media
const fallbackImages = [blogImage1, blogImage2, blogImage3, blogImage4, blogImage5, blogImage6];

// Featured post data
export const featuredPost = {
  id: 0,
  title: 'EXPLORING THE WONDERS OF THE UNKNOWN',
  excerpt: 'Unraveling the Secrets of the Invisible World\nJoin us as we delve into the fascinating realm of the unseen, exploring the hidden forces and phenomena that shape our reality. From the microscopic wonders of Nanotex undiscovered gems.',
  author: 'Community',
  date: 'April 25, 2025',
  category: 'Insight',
  readTime: '12 min read',
  image: blogImage
};

// Utility functions
const stripHtml = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const getCategoryFromClass = (classList) => {
  if (classList.includes('category-community')) return 'Community';
  if (classList.includes('category-insight')) return 'Insight';
  if (classList.includes('category-products')) return 'Products';
  if (classList.includes('category-news')) return 'News';
  return 'Community';
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

const getFeaturedImage = (post, index) => {
  if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  // If no featured media, try to extract image from content
  const content = post.content.rendered;
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
  if (imgMatch) {
    return imgMatch[1];
  }
  // Fallback to default images
  return fallbackImages[index % fallbackImages.length];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getFirstLine = (text) => {
  if (!text) return '';
  // Split by newlines and get first non-empty line
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length > 0) {
    const firstLine = lines[0].trim();
    return firstLine.length > 110 ? firstLine.substring(0, 110) + '...' : firstLine;
  }
  return '';
};

// Main API function to fetch and transform posts
export const fetchBlogPosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/wp-json/wp/v2/posts/?_embed');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform WordPress data to match our component structure
    const transformedPosts = await Promise.all(data.map(async (post, index) => {
      const cleanExcerpt = stripHtml(post.excerpt.rendered);
      const cleanContent = stripHtml(post.content.rendered);
      const category = getCategoryFromClass(post.class_list || []);
      const readTime = calculateReadTime(cleanContent);
      
      // Try to get first line from content first, then fallback to excerpt
      const firstLineFromContent = getFirstLine(cleanContent);
      const firstLineFromExcerpt = getFirstLine(cleanExcerpt);
      const finalExcerpt = firstLineFromContent || firstLineFromExcerpt || 'No preview available';

      return {
        id: post.id,
        title: post.title.rendered,
        excerpt: finalExcerpt,
        author: 'Community',
        date: formatDate(post.date),
        category: category,
        readTime: readTime,
        image: getFeaturedImage(post, index),
        url: post.link,
        slug: post.slug,
        sticky: post.sticky
      };
    }));

    return { posts: transformedPosts, error: null };
  } catch (err) {
    console.error('Error fetching posts:', err);
    return { posts: [], error: 'Failed to load posts. Please try again later.' };
  }
};

// Categories for filtering
export const categories = ['All', 'Community', 'Insight', 'Products', 'News'];

// Filter posts by category
export const filterPostsByCategory = (posts, selectedCategory) => {
  return selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
};
