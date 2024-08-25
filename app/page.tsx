"use client";
import React, { useState } from "react";
import Avatar from "@/components/Avatar";

const CustomizeAvatar: React.FC = () => {
  const [name, setName] = useState("Bashir Mohamed");
  const [backgroundColor, setBackgroundColor] = useState("bg-blue-600");
  const [textColor, setTextColor] = useState("text-white");
  const [shape, setShape] = useState<"circle" | "square" | "rounded-square">(
    "circle"
  );
  const [fontFamily, setFontFamily] = useState("font-sans");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Customize Your Avatar</h1>
      <Avatar
        name={name}
        backgroundColor={backgroundColor}
        textColor={textColor}
        shape={shape}
        fontFamily={fontFamily}
      />
      <div className="mt-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Background Color</label>
          <select
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="bg-blue-600">Blue</option>
            <option value="bg-red-600">Red</option>
            <option value="bg-green-600">Green</option>
            <option value="bg-yellow-600">Yellow</option>
            <option value="bg-purple-600">Purple</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Text Color</label>
          <select
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="text-white">White</option>
            <option value="text-black">Black</option>
            <option value="text-gray-800">Gray</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Shape</label>
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value as any)}
            className="w-full p-2 border rounded"
          >
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="rounded-square">Rounded Square</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Font</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="font-sans">Sans</option>
            <option value="font-serif">Serif</option>
            <option value="font-mono">Monospace</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomizeAvatar;
