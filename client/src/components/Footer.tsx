import { Wrench, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const services = [
    "Engine Repair",
    "Pump Systems", 
    "Electrical Service",
    "Hydraulic Systems",
    "Emergency Repairs",
    "Safety Inspections"
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-wider">RELIANCE EQUIPMENT</h3>
                <p className="text-sm font-mono text-gray-400">EST. 1982</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 text-lg leading-relaxed"
            >
              Complete fire apparatus repair and maintenance services. Serving Maine's fire departments 
              with excellence since 1982.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a
                href="https://www.facebook.com/RelianceEquipment/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href="tel:2076260075"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 tracking-wider">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="tel:2076260075" className="hover:text-red-400 transition-colors">
                  (207) 626-0075
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>Vassalboro, ME</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service} className="hover:text-red-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 Reliance Equipment. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Proudly serving Maine since 1982</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
