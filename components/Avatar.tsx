import React from 'react';

interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 80,
  backgroundColor = 'bg-blue-600',
  textColor = 'text-white',
}) => {
  const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    const initials = nameArray.map((n) => n[0]).join('').toUpperCase();
    return initials;
  };

  const initials = getInitials(name);

  return (
    <div
      className={`${backgroundColor} ${textColor} w-${size} h-${size} rounded-full flex items-center justify-center text-3xl font-bold uppercase mb-4`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
