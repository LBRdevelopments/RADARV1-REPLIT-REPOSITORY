import React, { useContext } from 'react';
import { AuthContext } from '@/lib/contexts/AuthContext';
import SignInWithGoogle from '@/components/SignInWithGoogle';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      {user ? (
        <div className="mt-4">
          <h2 className="font-semibold">Welcome, {user.email}</h2>
          {/* Add more user profile details here */}
        </div>
      ) : (
        <div className="mt-4">
          <p>Please log in to view your profile.</p>
          <SignInWithGoogle />
        </div>
      )}
    </div>
  );
};

export default Profile; 