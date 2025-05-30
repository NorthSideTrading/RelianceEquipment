import { ChevronDown, Phone, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import firetruckClassicImg from "@assets/firetruckclassic.jpg";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden parallax"
      style={{ backgroundImage: `url(${firetruckClassicImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-red-600/20 border border-red-500/30 rounded-full px-6 py-2 mb-6"
            >
              <span className="text-white font-mono text-sm font-semibold">EST. 1982</span>
              <div className="w-2 h-2 bg-red-500 rounded-full ml-3 animate-pulse-slow"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 text-shadow leading-none tracking-wider"
            >
              RELIANCE<br />
              <span className="text-red-500">EQUIPMENT</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 font-medium text-shadow"
            >
              Complete Fire Apparatus Repair & Maintenance
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0 text-shadow leading-relaxed"
            >
              Professional repair services for fire trucks, emergency vehicles, and rescue equipment. 
              Serving Maine's fire departments with excellence since 1982.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button 
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold hover-lift"
              >
                <a href="tel:2076260075">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (207) 626-0075
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-4 text-lg font-bold hover-lift backdrop-blur-sm"
              >
                <a href="#services">
                  <Eye className="h-5 w-5 mr-2" />
                  View Our Work
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
