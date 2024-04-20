import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Stats from "@/components/Stats";
import Vision from "@/components/Vision";
import Guideline from "@/components/Guideline";
import Testimonial from "@/components/Testimonial";
import CarouselGallery from "@/components/CarouselGallery";
import aboutus from "@/components/Aboutus";

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselGallery />
      <Card />
      <Vision />
      <Stats />
      <Guideline />
      <Testimonial />
      <Footer />
    </>
  );
}
