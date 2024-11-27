"use client";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Projects2 from "@/components/sections/projects/Projects2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import { useHeaderContex } from "@/providers/HeaderContex";

const Home2Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero2 />
      <div style={{ marginTop: '40vh' }}>
        <Projects2 />
      </div>
      <div className="border__line"></div>
      <Testimonials2 />
      <Blogs2 />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};

export default Home2Main;
