import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume file to the public folder
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating blur circles - Brighter and more movement */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/2 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-yellow-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>

        {/* Additional smaller elements */}
        <div className="absolute top-1/6 right-1/6 w-24 h-24 bg-indigo-500/25 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute bottom-1/6 right-1/3 w-20 h-20 bg-cyan-500/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-2/3 left-1/6 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl animate-float-slow"></div>

        {/* Subtle gradient orbs - Brighter */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-tl from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Moving particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/30 rounded-full animate-float-fast"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/50 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-pink-400/40 rounded-full animate-float-fast" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="animate-fade-in-up w-full flex flex-col items-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-500/30">
            🟢 Available for Internships & Entry-Level Positions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="gradient-text">Arun</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate Full-Stack Developer crafting digital experiences with modern technologies
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I specialize in building responsive web applications and creating seamless user experiences.
            Currently pursuing my passion for technology and innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </Button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-gray-400 hover:text-purple-400 transition-colors animate-bounce"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
