import About from "./page/About";
import HeroSection from "./page/Hero";
import Image from "./page/Image";
import ImageGallery from "./page/ImageGalary";
import ImageSlider from "./page/ImageSlider";
import Services from "./page/Services";
import WorkSection from "./page/Work";
import HeroImage1 from "./image/Hero1.jpg";
import HeroImage2 from "./image/Hero2.jpg";
import HeroImage3 from "./image/Hero3.jpg";
import Lead from "./page/Lead";

const images = [HeroImage1, HeroImage2, HeroImage3];

export default function App() {
  return (
    <div className="font-inter scrollbar-none">
      <HeroSection />
      <WorkSection />
      <ImageGallery imagePosition="right" />
      <Services />
      <ImageGallery imagePosition="left" />
      <Image />
      <About />
      <ImageSlider images={images} />
      <Lead />
    </div>
  );
}
