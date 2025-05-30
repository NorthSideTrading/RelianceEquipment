import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import axeWrenchSymbol from '@assets/AxeWrenchSymbol.png';

// Import all fire truck images
import firetruckWater2Img from "@assets/firetruckwater2.jpg";
import firetruckWaterImg from "@assets/firetruckwater.jpg";
import firetruck2Img from "@assets/firetruck2.jpg";
import oldTruckServiceImg from "@assets/oldtruckservice.jpg";
import firetruckWater3Img from "@assets/firetruckwater3.jpg";

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: firetruckWater2Img,
      alt: "Fire trucks spraying powerful water streams during emergency response with misty atmosphere",
      title: "Emergency Response"
    },
    {
      src: firetruckWaterImg,
      alt: "Fire truck with extended ladder spraying water with trees and mist in background",
      title: "Water Operations"
    },
    {
      src: firetruck2Img,
      alt: "Modern fire truck elevated on hydraulic lift in professional repair facility",
      title: "Expert Repairs"
    },
    {
      src: oldTruckServiceImg,
      alt: "Vintage fire truck elevated on professional hydraulic lift in service bay with red Mohawk equipment",
      title: "Professional Service"
    },
    {
      src: firetruckWater3Img,
      alt: "Fire truck spraying water with spectacular rainbow effect against blue sky",
      title: "Rainbow Operations"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={axeWrenchSymbol} alt="" className="absolute top-16 left-8 opacity-[0.02] w-28 h-28" />
        <img src={axeWrenchSymbol} alt="" className="absolute top-32 right-16 opacity-[0.02] w-20 h-20" />
        <img src={axeWrenchSymbol} alt="" className="absolute bottom-32 left-20 opacity-[0.02] w-36 h-36" />
        <img src={axeWrenchSymbol} alt="" className="absolute bottom-16 right-8 opacity-[0.02] w-24 h-24" />
        <img src={axeWrenchSymbol} alt="" className="absolute top-1/3 left-1/2 opacity-[0.02] w-24 h-24" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-wider">
            Fire Trucks in <span className="text-red-600">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our expert repair work in action and the fire apparatus we service across Maine
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  className="w-full h-96 md:h-[500px] object-contain bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-bold mb-2 text-shadow">
                      {images[currentSlide].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
