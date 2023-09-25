import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact us"
        description="Let's Connect and Turn Your Ideas into Reality - Reach Out to Stunly Agency Today!"
      />
      <Contact isHomePage={true} />
    </>
  );
};

export default ContactPage;
