import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <CareersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;