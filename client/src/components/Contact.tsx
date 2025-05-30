import { Phone, MapPin, Clock, ExternalLink, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import firetruckPanaImg from "@assets/firetruckpana.jpg";

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "24/7 Emergency Service Available",
      content: "(207) 626-0075",
      href: "tel:2076260075"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Professional Service Facility",
      content: "Vassalboro, ME",
      href: "https://maps.google.com/?q=Vassalboro,ME"
    },
    {
      icon: ExternalLink,
      title: "Follow Us",
      subtitle: "Stay updated on our services",
      content: "Facebook",
      href: "https://www.facebook.com/firepumpmaintainer"
    }
  ];

  return (
    <>
      {/* Emergency Service Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-red-600/20 border border-red-500 rounded-xl p-8 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white tracking-wider">EMERGENCY SERVICE</h3>
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Equipment down? We understand the urgency. Our emergency service team is standing by 24/7 
              to get your apparatus back in service as quickly as possible.
            </p>
            <Button 
              asChild 
              size="lg"
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
            >
              <a href="tel:2076260075">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section with Background Image */}
      <section 
        id="contact" 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${firetruckPanaImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wider text-shadow">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-sm text-gray-200 max-w-xl mx-auto text-shadow">
              Ready to schedule service or need emergency repairs? Our team is here to help 24/7.
            </p>
          </motion.div>

          {/* Contact Buttons */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-8 text-lg font-bold hover-lift rounded-xl shadow-2xl border-2 border-red-500 hover:border-red-400 transition-all duration-300"
                >
                  <a href={item.href} target={item.href?.startsWith('http') ? '_blank' : undefined}>
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-wider mb-1">{item.title}</h3>
                        <p className="text-sm text-red-100 mb-2">{item.subtitle}</p>
                        <p className="text-lg font-semibold text-yellow-300">{item.content}</p>
                      </div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
