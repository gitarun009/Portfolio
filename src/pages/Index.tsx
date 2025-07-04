import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Brain, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactSection from "@/components/ContactSection";
import TechStackScroll from "@/components/TechStackScroll";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "GitHub User Finder",
      description: "A responsive web app to search GitHub users and view their profiles and latest repositories. Built with HTML, CSS, JavaScript, and the GitHub REST API for seamless user discovery.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
      githubUrl: "https://github.com/gitarun009/Github-User-Finder",
      liveUrl: "https://gitarun009.github.io/Github-User-Finder/"
    },
    {
      id: 2,
      title: "BlockAuth",
      description: "A secure blockchain-based authentication system built with modern web technologies. Features decentralized user verification, smart contract integration, and a robust security framework for next-generation authentication solutions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Solidity", "Web3.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/gitarun009/BlockAuth",
      liveUrl: "https://github.com/gitarun009/BlockAuth#readme"
    },
    {
      id: 3,
      title: "Password Generator",
      description: "A sleek and customizable password generator built with HTML, CSS, and JavaScript. Generate strong, secure passwords with real-time strength feedback and one-click copy functionality.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/gitarun009/Password-Generator",
      liveUrl: "https://gitarun009.github.io/Password-Generator/"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, JavaScript, TypeScript, HTML/CSS" },
    { name: "AI Integration", icon: Brain, description: "OpenAI API, ChatGPT, AI-powered Web Apps" },
    { name: "Software Development", icon: Laptop, description: "DSA, Problem Solving, Git, MongoDB" }
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating blur circles - Brighter and more movement */}
          <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-float-fast"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-green-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-yellow-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>

          {/* Additional smaller elements */}
          <div className="absolute top-1/6 right-1/6 w-24 h-24 bg-indigo-500/25 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-1/6 right-1/3 w-20 h-20 bg-cyan-500/25 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-2/3 left-1/6 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl animate-float-slow"></div>

          {/* Moving particles */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/35 rounded-full animate-float-fast"></div>
          <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-purple-400/45 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400/55 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-pink-400/45 rounded-full animate-float-fast" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={projectsRef} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Here are some of the projects I've worked on during my studies and personal time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 dark:bg-slate-900/50 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating blur circles - Brighter and more movement */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-float-fast"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-green-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-yellow-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>

          {/* Additional smaller elements */}
          <div className="absolute top-1/6 left-1/6 w-20 h-20 bg-indigo-500/25 rounded-full blur-2xl animate-float-fast"></div>
          <div className="absolute bottom-1/6 left-1/3 w-24 h-24 bg-cyan-500/25 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-2/3 right-1/6 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl animate-float-slow"></div>

          {/* Subtle gradient orbs - Brighter */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/12 to-blue-500/12 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Moving particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/35 rounded-full animate-float-fast"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400/45 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/55 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-pink-400/45 rounded-full animate-float-fast" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={skillsRef} className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Technologies and tools I work with
            </p>
          </div>

          {/* Tech Stack Animation - Full Width */}
          <div className="animate-scale-in w-full overflow-visible" style={{ animationDelay: '0.2s' }}>
            <TechStackScroll />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 stagger-children">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Index;
