import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(onLoadingComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (showContent) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 z-50 flex items-center justify-center animate-fade-out">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-bounce-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-gray-300 animate-fade-in-up">
            Ready to explore amazing projects!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          Loading Portfolio...
        </h2>
        <div className="w-64 bg-gray-700 rounded-full h-2 mx-auto">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 