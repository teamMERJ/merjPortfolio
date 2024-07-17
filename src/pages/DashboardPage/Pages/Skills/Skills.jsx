import React from "react";
import SkillCard from "./SkillsCard";

// Example skills data
const skills = [
  {
    name: "HTML",
    levelOfProficiency: "expert",
    logo: "path-to-html-logo.png",
  },
  {
    name: "CSS",
    levelOfProficiency: "expert",
    logo: "path-to-css-logo.png",
  },
  {
    name: "JavaScript",
    levelOfProficiency: "advanced",
    logo: "path-to-javascript-logo.png",
  },
  {
    name: "React",
    levelOfProficiency: "advanced",
    logo: "path-to-react-logo.png",
  },
  {
    name: "Node.js",
    levelOfProficiency: "intermediate",
    logo: "path-to-nodejs-logo.png",
  },
  {
    name: "Express",
    levelOfProficiency: "intermediate",
    logo: "path-to-express-logo.png",
  },
  {
    name: "MongoDB",
    levelOfProficiency: "intermediate",
    logo: "path-to-mongodb-logo.png",
  },
  {
    name: "Git",
    levelOfProficiency: "advanced",
    logo: "path-to-git-logo.png",
  },
  {
    name: "TypeScript",
    levelOfProficiency: "advanced",
    logo: "path-to-typescript-logo.png",
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-primary text-white p-8">
      <div className="max-w-6xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 row-span-2">
            <SkillCard skill={skills[0]} />
          </div>
          <div className="row-span-3">
            <SkillCard skill={skills[1]} />
          </div>
          {skills.slice(2).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
