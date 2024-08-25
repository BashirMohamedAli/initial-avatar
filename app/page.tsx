import React from 'react';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <Header />
      <Avatar name="John Doe" />
      <p className="text-lg mt-4">This is the home page.</p>
    </div>
  );
};

export default Home;
