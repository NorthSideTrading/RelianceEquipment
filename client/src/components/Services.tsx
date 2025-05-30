import { Wrench, Droplets, Zap, Settings, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import CrossedAxeWrench from "@/components/CrossedAxeWrench";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Engine Repair",
      description: "Complete engine diagnostics, repair, and rebuilds for all fire apparatus models. From routine maintenance to major overhauls.",
      features: ["Diesel engine service", "Transmission repair", "Cooling system maintenance"]
    },
    {
      icon: Droplets,
      title: "Pump Systems",
      description: "Expert pump maintenance, testing, and certification to ensure your water delivery systems perform when lives are on the line.",
      features: ["Pump testing & certification", "Valve replacement", "Plumbing system repair"]
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete electrical diagnostics and repair including lighting systems, control panels, and emergency equipment wiring.",
      features: ["LED lighting upgrades", "Control panel repair", "Warning system service"]
    },
    {
      icon: Settings,
      title: "Hydraulic Service",
      description: "Hydraulic system maintenance and repair for aerial ladders, outriggers, and other powered equipment on your apparatus.",
      features: ["Aerial ladder service", "Outrigger maintenance", "Hydraulic pump repair"]
    },
    {
      icon: Clock,
      title: "Emergency Service",
      description: "24/7 emergency repair services to get your critical equipment back in service quickly. We understand every minute counts.",
      features: ["24/7 availability", "On-site service calls", "Emergency parts sourcing"]
    },
    {
      icon: ShieldCheck,
      title: "Safety Inspections",
      description: "Complete safety inspections and certifications to ensure your apparatus meets all safety standards and regulations.",
      features: ["Annual safety inspections", "DOT compliance checks", "Certification documentation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <CrossedAxeWrench className="absolute top-20 left-10 opacity-5 text-gray-400" size={120} />
        <CrossedAxeWrench className="absolute top-40 right-20 opacity-5 text-gray-400" size={80} />
        <CrossedAxeWrench className="absolute top-96 left-1/4 opacity-5 text-gray-400" size={100} />
        <CrossedAxeWrench className="absolute bottom-40 right-10 opacity-5 text-gray-400" size={140} />
        <CrossedAxeWrench className="absolute bottom-20 left-1/3 opacity-5 text-gray-400" size={90} />
        <CrossedAxeWrench className="absolute top-1/2 right-1/4 opacity-5 text-gray-400" size={110} />
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
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fire apparatus repair and maintenance services to keep your fleet ready for any emergency
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card p-8 rounded-2xl hover-lift group"
            >
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
