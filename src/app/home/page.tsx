import React, { useEffect, useState } from 'react';
import { getDocuments } from '@/lib/supabase/supabaseUtils';
import PlanFeed from '@/app/components/PlanFeed';

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getDocuments('posts');
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Feed</h1>
      <PlanFeed />
      <div className="mt-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 mb-4 rounded-lg">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed; 