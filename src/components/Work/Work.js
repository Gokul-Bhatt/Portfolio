import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Work.css";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking",
      description: "A MERN stack hotel booking application.",
      image: "https://picsum.photos/700/500?random=1",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Live weather forecast using OpenWeather API.",
      image: "https://picsum.photos/700/500?random=2",
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Realtime messaging using Socket.io.",
      image: "https://picsum.photos/700/500?random=3",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Manage daily tasks with authentication.",
      image: "https://picsum.photos/700/500?random=4",
    },
    {
      id: 5,
      title: "Portfolio",
      description: "Responsive portfolio built with React.",
      image: "https://picsum.photos/700/500?random=5",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-5 bg-[#050816] work" >
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[current].id}
          initial={{ opacity: 0, x: 150, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -150, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/20"
        >
        
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="img"
          />
          
          <div className="p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tit">
              {projects[current].title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed desc">
              {projects[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Work;