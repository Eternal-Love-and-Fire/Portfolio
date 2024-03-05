import React from "react";

interface WorkCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className="bg-white w-full sm:min-w-96 rounded-lg shadow-md p-6 m-4 flex-1 flex flex-col justify-between">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <div className="flex items-center">
        <div className="flex items-center gap-2 text-gray-800">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
          Read More
        </button>
      </div>
    </div>
  );
};
