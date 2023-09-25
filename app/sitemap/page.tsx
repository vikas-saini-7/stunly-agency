import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Sitemap = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sitemap"
        description="Explore our website's sitemap for easy navigation and access to all our valuable content and services."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          Site
        </div>
      </section>
    </>
  );
};

export default Sitemap;
