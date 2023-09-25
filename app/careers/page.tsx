import Breadcrumb from "@/components/Common/Breadcrumb";
import { careersData } from "@/DUMMY_DATA";
import Link from "next/link";

const Careers = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Stay Informed and Inspired: Dive into Our Latest Insights, Tips, and Industry Updates on the Stunly Agency Blog."
      />

      <section className="pt-[60px] pb-[120px]">
        <div className="container hire-us-page">

            {/* item  */}
            {careersData.map((item) => (
              <div className="item py-16 px-4 sm:px-6 lg:px-8 flex items-center dark:bg-dark shadow-md">
              <div className="left">
                <h2>{item.title}</h2>
                <p>{item.para}</p>
                <Link href={item.link} target="_blank">
                  <button className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 mt-4">Apply Now</button>
                </Link>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
            ))}

        </div>
      </section>
    </>
  );
};

export default Careers;
