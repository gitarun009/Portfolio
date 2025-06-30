import React from 'react';
import { Github, Code, Database, FileCode, Terminal, Globe, Coffee, Zap, Leaf, Server, Atom, Braces } from "lucide-react";

const TechStackScroll = () => {
  const technologies = [
    { name: 'Java', icon: Coffee },
    { name: 'Python', icon: Braces },
    { name: 'JavaScript', icon: Zap },
    { name: 'HTML/CSS', icon: Globe },
    { name: 'GitHub', icon: Github },
    { name: 'VS Code', icon: FileCode },
    { name: 'PyCharm', icon: Terminal },
    { name: 'IntelliJ', icon: Coffee },
    { name: 'React.js', icon: Atom },
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Server },
    { name: 'Node.js', icon: Code },
  ];

  return (
    <div className="relative overflow-hidden py-8 w-[100vw] -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)]">
      {/* First row */}
      <div className="flex animate-scroll-right w-max">
        {[...technologies, ...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Icon className="h-6 w-6 text-white" />
                <span className="text-white font-medium text-sm">{tech.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second row (reverse direction) */}
      <div className="flex animate-scroll-left w-max mt-6">
        {[...technologies.reverse(), ...technologies.reverse(), ...technologies.reverse(), ...technologies.reverse(), ...technologies.reverse()].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Icon className="h-6 w-6 text-white" />
                <span className="text-white font-medium text-sm">{tech.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackScroll;
