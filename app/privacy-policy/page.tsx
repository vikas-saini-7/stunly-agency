import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Last updated: January 01, 2023."
      />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
        {/* <nav>
        <ul>
            <li><a href="#introduction">1. Introduction</a></li>
            <li><a href="#information-collection">2. Information We Collect</a></li>
            <li><a href="#how-we-use">3. How We Use Your Information</a></li>
            <li><a href="#data-security">4. Data Security</a></li>
            <li><a href="#cookies">5. Cookies and Tracking Technologies</a></li>
            <li><a href="#third-party-links">6. Third-Party Links and Services</a></li>
            <li><a href="#your-rights">7. Your Rights and Choices</a></li>
            <li><a href="#children-privacy">8. Children's Privacy</a></li>
            <li><a href="#changes-policy">9. Changes to this Privacy Policy</a></li>
            <li><a href="#contact-us">10. Contact Us</a></li>
        </ul>
    </nav> */}

    <div className="privacy-policy container">
        <section id="introduction">
            <h2>1. Introduction</h2>
            <p>Welcome to Stunly Agency. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, interact with our services, or engage in any business activities with us. We are committed to safeguarding your privacy and ensuring the security of your personal information.</p>
        </section>

        <section id="information-collection">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of personal information:
            Contact Information (e.g., name, email address, phone number).
            Demographic Information (e.g., location, company details).
            Technical Information (e.g., IP address, device information).
            Usage Information (e.g., website interactions, cookies, analytics).
            Any other information you provide voluntarily.</p>
        </section>

        <section id="how-we-use">
            <h2>3. How We Use Your Information</h2>
            <p>We may use your personal information for various purposes, including but not limited to:
            Providing our services and responding to your inquiries.
            Customizing and improving our website and services.
            Sending newsletters, updates, or marketing communications.
            Analyzing user behavior and trends for research and insights.
            Complying with legal and regulatory requirements.</p>
        </section>

        <section id="data-security">
            <h2>4. Data Security</h2>
            <p>We implement security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please note that no online transmission or storage method is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section id="cookies">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and similar tracking technologies to enhance your browsing experience on our website. You can manage your cookie preferences through your browser settings.</p>
        </section>

        <section id="third-party-links">
            <h2>6. Third-Party Links and Services</h2>
            <p>Our website may contain links to third-party websites or services that have their privacy policies. We are not responsible for the privacy practices or content of these third parties.</p>
        </section>

        <section id="your-rights">
            <h2>7. Your Rights and Choices</h2>
            <p>You have certain rights regarding your personal information, including the right to access, correct, or delete it. You can also choose to opt out of marketing communications.</p>
        </section>

        <section id="children-privacy">
            <h2>8. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under this age.</p>
        </section>

        <section id="changes-policy">
            <h2>9. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or for legal compliance. We will notify you of any significant changes via our website or other means.</p>
        </section>

        <section id="contact-us">
            <h2>10. Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at [Your Contact Information].</p>
        </section>
    </div>

    </>
  );
};

export default PrivacyPolicyPage;
