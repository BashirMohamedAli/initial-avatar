import React from "react";
import Avatar from "@/components/Avatar";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <main className="flex flex-col items-center mt-8 p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
        <Avatar name="Bashir Mohamed" />
        <h2 className="text-3xl font-bold text-gray-900">Bashir Mo Ali</h2>
        <p className="text-center text-gray-700 mt-4">
          Experienced Full-stack engineer with expertise in modern web
          technologies, AI, and Linux. Self-taught and passionate about software
          development and technology innovation.
        </p>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <a
            href="mailto:takursiin253@gmail.com"
            className="text-blue-600 hover:underline"
          >
            takursiin253@gmail.com
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/BashirMohamedAli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bashir-mohamed-ali2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
