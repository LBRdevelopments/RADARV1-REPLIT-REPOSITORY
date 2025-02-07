import React, { useState } from 'react';
import { addDocument } from '@/lib/supabase/supabaseUtils';
import { uploadFile } from '@/lib/supabase/supabaseUtils'; // Import the uploadFile function

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const imageUrl = await uploadFile(image); // Use the uploadFile function
      if (imageUrl) {
        await addDocument('posts', { title, content, imageUrl });
        // Redirect or show success message
      } else {
        // Handle upload error
        console.error("Image upload failed.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold">Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CreatePost; 