import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import LeetCodeIcon from "@/components/ui/leetcode-icon";

const ContactSection = () => {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating blur circles - Brighter and more movement */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/25 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-56 h-56 bg-yellow-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional smaller elements */}
        <div className="absolute top-1/6 left-1/6 w-20 h-20 bg-indigo-500/30 rounded-full blur-2xl animate-float-fast"></div>
        <div className="absolute bottom-1/6 left-1/3 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-2/3 right-1/6 w-28 h-28 bg-orange-500/25 rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Subtle gradient orbs - Brighter */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-pink-500/15 to-rose-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-float-fast"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-pink-400/50 rounded-full animate-float-fast" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm actively looking for internship opportunities and entry-level positions. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">What I'm Looking For</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Frontend/Full-stack Development Internships
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Entry-level Software Engineer positions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    UI/UX Design opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Remote or on-site positions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">What I Bring</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Strong foundation in modern web technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Passion for clean, user-friendly design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Quick learner with problem-solving skills
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Team collaboration experience
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="flex justify-center gap-4">
              <a href="https://github.com/gitarun009" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors bg-slate-800/50 p-3 rounded-full hover:bg-slate-700/50 hover:scale-110 transform duration-300">
                <Github className="h-8 w-8" />
              </a>
              
              <a href="https://www.linkedin.com/in/arun-pratap-singh09/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors bg-slate-800/50 p-3 rounded-full hover:bg-slate-700/50 hover:scale-110 transform duration-300">
                <Linkedin className="h-8 w-8" />
              </a>
              
              <a href="https://leetcode.com/u/arun_2709/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors bg-slate-800/50 p-3 rounded-full hover:bg-slate-700/50 hover:scale-110 transform duration-300">
                <LeetCodeIcon className="h-8 w-8" />
              </a>
              
              <button
                onClick={handleDownloadResume}
                className="text-gray-400 hover:text-purple-400 transition-colors bg-slate-800/50 px-6 py-3 rounded-full hover:bg-slate-700/50 hover:scale-110 transform duration-300 flex items-center gap-2"
              >
                <Download className="h-8 w-8" />
                <span className="text-gray-400 hover:text-purple-400 transition-colors">Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
