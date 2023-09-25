import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const HireSection = () => {
  return (
    // py-16 md:py-20 lg:py-28
    <section id="hire-section" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container hire-section py-8">
        <div>
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Want something Stunning?</h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">Hire our talented team members to bring your ideas to the world with ease. You are just few clicks away.</p>
            <Link href='/hire'>
                <button className="animated-button fast-animation mt-8 duration-80 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none">
                    🔥 Hire Us
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HireSection;
