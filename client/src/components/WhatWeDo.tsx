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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={tradeshowImg} 
                alt="Reliance Equipment trade show display with fire apparatus repair tools and equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
