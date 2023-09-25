import Breadcrumb from "@/components/Common/Breadcrumb";
import { portfolioPageItems } from "@/DUMMY_DATA";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Exploring Creativity in Every Pixel: Our Showcase of Innovative Projects, Highlighting the Artistry and Expertise of Stunly Agency."
      />

      <section className="pt-[60px] pb-[120px]">
        <div className="container portfolio-page">
          {portfolioPageItems.map((item) => (
            <div id={item.heading} className="item py-16 px-4 sm:px-6 lg:px-8 flex items-center dark:bg-dark">
            <div className="max-w-screen-md mx-auto text-white">
              <div className="lg:flex items-center">

                <div className="lg:w-full lg:pr-10">
                    <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">{item.heading}</h2>
                    <p className="text-lg text-body-color mb-8">{item.para}</p>
                    <Link href={item.path} target="_blank" className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 mt-4">View Work</Link>
                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <Image src={item.img} alt="Cover Image" className="rounded-lg shadow-lg" width={500} height={500}/>
                </div>

              </div>
            </div>
          </div>
          ))}
        </div>  
      </section>
    </>
  );
};

export default Portfolio;