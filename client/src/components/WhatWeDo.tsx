import { Check } from "lucide-react";
import { motion } from "framer-motion";
import tradeshowImg from "@assets/tradeshow.jpg";

export default function WhatWeDo() {
  const features = [
    {
      title: "Complete Fire Apparatus Repair",
      description: "Engine, pump, hydraulic, and electrical system maintenance"
    },
    {
      title: "Emergency Service",
      description: "24/7 emergency repair services when you need us most"
    },
    {
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to prevent costly breakdowns"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-wider">
              What We <span className="text-red-600">Do</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Reliance Equipment, we specialize in comprehensive fire apparatus repair and maintenance services. 
              Our expert technicians ensure your emergency vehicles are always ready to respond when lives depend on it.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-red-600 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10"></div>
              <img 
                src={tradeshowImg} 
                alt="Reliance Equipment trade show display with fire apparatus repair tools and equipment" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Professional Service
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
