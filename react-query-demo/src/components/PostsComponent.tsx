import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import './PostsComponent.css';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);
  
  const { data: posts, isLoading, error, isError, refetch } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const handleRefetch = () => {
    refetch();
  };

  const togglePosts = () => {
    setShowPosts(prev => !prev);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        <p>Error: {error.message}</p>
        <button onClick={handleRefetch}>Retry</button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="controls">
        <button onClick={handleRefetch} className="refresh-btn">
          Refresh Posts
        </button>
        <button onClick={togglePosts} className="toggle-btn">
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
      </div>
      
      {showPosts && (
        <div className="posts-grid">
          {posts?.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-meta">
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="cache-info">
        <p>💡 Try refreshing the page or toggling the posts to see React Query's caching in action!</p>
        <p>Posts are cached for 5 minutes. The loading spinner won't show when data is fresh.</p>
      </div>
    </div>
  );
};

export default PostsComponent;
