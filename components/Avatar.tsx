import React from "react";

interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 100,
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
}) => {
  const getInitials = (name: string) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  const initials = getInitials(name);

  return (
    <div
      className={`${backgroundColor} ${textColor} w-${size} h-${size} rounded-full flex items-center justify-center text-4xl mb-3 font-bold uppercase p-2 shadow-lg`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
