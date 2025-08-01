import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;