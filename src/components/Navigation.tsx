import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { name: 'About', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the distance to scroll
      const targetPosition = element.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.max(1500, Math.abs(distance) * 0.8); // Minimum 1.5s, scales with distance
      
      let start: number | null = null;
      
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we're at the bottom of the page (contact section)
      const isAtBottom = scrollY + windowHeight >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        console.log('At bottom - setting contact as active');
        setActiveSection('contact');
        return;
      }

      // Check each section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop - 150; // Increased offset for better detection
          const sectionBottom = offsetTop + offsetHeight - 150;
          
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            console.log(`Setting ${section} as active (scrollY: ${scrollY}, sectionTop: ${sectionTop}, sectionBottom: ${sectionBottom})`);
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Blur overlay above navbar */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm z-40"></div>
      
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full">
          <div className="flex items-center justify-center px-5 py-2.5">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                    activeSection === item.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
