import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import all firetruck images
import firetruck1 from "@assets/firetruck1.jpg";
import firetruck2 from "@assets/firetruck2.jpg";
import firetruckpana from "@assets/firetruckpana.jpg";
import firetruckpana1 from "@assets/firetruckpana (1).jpg";
import firetruckwater3 from "@assets/firetruckwater3.jpg";
import oldtruckservice from "@assets/oldtruckservice.jpg";
import firetruckbaby from "@assets/firetruckbaby.jpg";
import firetruckclassic from "@assets/firetruckclassic.jpg";
import firetruckclassic2 from "@assets/firetruckclassic2.jpg";
import firetrucks from "@assets/firetrucks.jpg";
import firetruckscene from "@assets/firetruckscene.jpg";
import firetruckwater from "@assets/firetruckwater.jpg";
import firetruckwater2 from "@assets/firetruckwater2.jpg";
import tradeshow from "@assets/tradeshow.jpg";

const galleryImages = [
  {
    src: firetruck1,
    title: "Modern Fire Engine",
    description: "State-of-the-art fire engine with advanced equipment"
  },
  {
    src: firetruck2,
    title: "Emergency Response Vehicle",
    description: "Ready for immediate emergency deployment"
  },
  {
    src: firetruckpana,
    title: "Panoramic Fire Station",
    description: "Professional service facility with multiple units"
  },
  {
    src: firetruckpana1,
    title: "Service Bay Operations",
    description: "Comprehensive maintenance and repair services"
  },
  {
    src: firetruckwater3,
    title: "Water Operations",
    description: "Specialized water delivery and firefighting capabilities"
  },
  {
    src: oldtruckservice,
    title: "Classic Restoration",
    description: "Vintage fire truck on hydraulic lift for service"
  },
  {
    src: firetruckbaby,
    title: "Compact Emergency Unit",
    description: "Specialized compact fire response vehicle"
  },
  {
    src: firetruckclassic,
    title: "Heritage Fire Engine",
    description: "Classic fire engine with traditional design"
  },
  {
    src: firetruckclassic2,
    title: "Restored Classic",
    description: "Beautifully maintained vintage fire truck"
  },
  {
    src: firetrucks,
    title: "Fleet Overview",
    description: "Multiple emergency vehicles ready for service"
  },
  {
    src: firetruckscene,
    title: "Emergency Scene",
    description: "Fire trucks responding to emergency situations"
  },
  {
    src: firetruckwater,
    title: "Water Cannon Operations",
    description: "High-pressure water delivery systems"
  },
  {
    src: firetruckwater2,
    title: "Firefighting Action",
    description: "Active firefighting and water operations"
  },
  {
    src: tradeshow,
    title: "Trade Show Display",
    description: "Showcasing equipment at industry events"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider"
            >
              Fire Truck <span className="text-yellow-400">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Explore our comprehensive collection of fire trucks, emergency vehicles, and service operations
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="aspect-square">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                          <p className="text-sm text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-screen p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>

              {/* Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].title}</h3>
                  <p className="text-gray-300">{galleryImages[currentIndex].description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}