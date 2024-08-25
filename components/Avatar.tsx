import React from "react";

interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  shape?: "circle" | "square" | "rounded-square";
  fontFamily?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 100,
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
  shape = "circle",
  fontFamily = "font-sans", // Default font
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

  const shapeClasses = {
    circle: "rounded-full",
    square: "",
    "rounded-square": "rounded-lg",
  };

  return (
    <div
      className={`${backgroundColor} ${textColor} ${shapeClasses[shape]} flex items-center justify-center text-4xl mb-3 font-bold uppercase p-2 shadow-lg`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontFamily: fontFamily, // Apply custom font
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
