import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
}