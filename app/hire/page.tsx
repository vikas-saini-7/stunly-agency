import { hireData } from "@/DUMMY_DATA";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HireForm from "@/components/HireForm";
import Link from "next/link";
import Image from "next/image";

const Hire = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hire us"
        description="Elevate Your Vision with Stunly Agency: Unlock Creative Excellence and Expertise for Your Next Project. Let's Collaborate!"
      />

      <section className="pt-[60px] pb-[120px]">
        <div className="container hire-us-page">

          {/* item  */}
          {hireData.map((item) => (
            <div className="item py-16 px-4 sm:px-6 lg:px-8 flex items-center dark:bg-dark shadow-md">
            <div className="left">
              <h2>{item.title}</h2>
              <p>{item.para}</p>
              <Link href={item.link} target="_blank">
                <button className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 mt-4">Hire Now</button>
              </Link>
            </div>
            <div className="right">
              <Image src={item.img} alt="" width={500} height={500} />
            </div>
          </div>
          ))}

          

        </div>
          <HireForm/>
      </section>
    </>
  );
};

export default Hire;
