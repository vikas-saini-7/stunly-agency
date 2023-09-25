import Breadcrumb from "@/components/Common/Breadcrumb";
import { portfolioPageItems } from "@/DUMMY_DATA";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Our Comprehensive Suite of Services Designed to Elevate Your Brand's Online Presence and Achieve Success."
      />
      
      <section className="pt-[60px] pb-[120px]">
        <div className="container mx-auto p-4 services">
          <div className="flex flex-wrap -mx-4">

            {portfolioPageItems.map((item) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="item rounded-lg shadow-md p-6">
                  <h2 className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl">{item.heading}</h2>
                  <p className="text-gray-700 mb-6 border-t border-body-color border-opacity-10 pt-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">{item.para}</p>
                  <Link href={item.path} target="_blank">
                    <button className="text-black hover:text-primary dark:text-white dark:hover:text-primary">View Work</button>
                  </Link>
                </div>
            </div>
            ))}

          </div>
        </div>
      </section>


    </>
  );
};

export default Services;
