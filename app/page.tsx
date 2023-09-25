import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import HireSection from "@/components/HireSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <HireSection/>
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Portfolio />
      <Testimonials />
      <HireSection/>
      {/* <Pricing /> */}
      <Blog />
      <Contact isHomePage={false}/>
      <HireSection/>
    </>
  );
}
