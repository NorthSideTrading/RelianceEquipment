import { Award, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";
import oldFiretruckImg from "@assets/oldfiretruck.jpg";
import firetruckBabyImg from "@assets/firetruckbaby.jpg";
import axeWrenchSymbol from "@assets/AxeWrenchSymbol.png";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our team consists of factory-trained and certified technicians with decades of combined experience in fire apparatus repair."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We understand the vital role fire departments play in protecting our communities. Your equipment readiness is our top priority."
    },
    {
      icon: Phone,
      title: "Always Available",
      description: "Emergency repairs can't wait. Our 24/7 service ensures your apparatus is back in service when your community needs it most."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-red-300 rounded-full blur-2xl"></div>
      </div>
      
      {/* Axe and Wrench Symbols */}
      <div className="absolute inset-0 opacity-8">
        <img 
          src={axeWrenchSymbol} 
          alt="" 
          className="absolute top-20 left-20 w-20 h-20 opacity-40" 
        />
        <img 
          src={axeWrenchSymbol} 
          alt="" 
          className="absolute bottom-20 right-20 w-18 h-18 opacity-30 transform rotate-180" 
        />
        <img 
          src={axeWrenchSymbol} 
          alt="" 
          className="absolute top-1/2 right-1/4 w-12 h-12 opacity-20 transform rotate-90" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-6 py-2 mb-6">
              <span className="text-red-600 font-mono text-sm font-semibold">EST. 1982</span>
              <div className="w-2 h-2 bg-red-500 rounded-full ml-3 animate-pulse-slow"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-wider">
              Over 40 Years of <span className="text-red-600">Excellence</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 1982 in Vassalboro, Maine, Reliance Equipment has been the trusted partner for fire departments 
              across the state. Our commitment to excellence and understanding of the critical nature of fire apparatus 
              keeps communities safe.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-red-600 rounded-full p-2 mt-1 flex-shrink-0">
                    <highlight.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent z-10"></div>
              <img 
                src={oldFiretruckImg} 
                alt="Vintage Bethel Fire Department Mack fire truck showcasing decades of firefighting heritage" 
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Heritage & Tradition
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4"><span className="text-red-600">Family</span> Tradition Continues</h3>
              <p className="text-lg text-gray-600 mb-6">
                Reliance Equipment isn't just a business—it's a family tradition of service to our community's first responders. 
                We take pride in the relationships we've built with fire departments throughout Maine over the past four decades.
              </p>
              <p className="text-gray-600">
                From routine maintenance to emergency repairs, we treat every piece of equipment as if lives depend on it—because they do.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden shadow-lg hover-lift">
                <img 
                  src={firetruckBabyImg} 
                  alt="Next generation at the fire station learning about fire equipment and safety" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">The next generation learning the trade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
