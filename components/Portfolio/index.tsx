import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import {portfolioItems} from '../../DUMMY_DATA.js'
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="portfolio"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[120px] bg-primary/5"
      >
        <div className="container">
        <SectionTitle
          title="What we have done so far"
          paragraph="Explore Our Diverse Portfolio of Work and Discover What Sets Stunly Agency Apart."
          center
        />
        <div className="portfolio-gallery">
            {portfolioItems.map((item) => (
                <div className="item" key={item.title}>
                    <div>
                      <Image src={item.img} alt="No image" className="img" fill />
                    </div>
                    <div className="layer">layer</div>
                </div>
            ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
