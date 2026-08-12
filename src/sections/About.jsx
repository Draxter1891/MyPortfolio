import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-bg-primary px-5 py-24 text-text-primary md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">

        
        <h2 className="text-[clamp(4.5rem,8vw,9rem)] font-bold leading-[0.8] tracking-[-0.045em]">
          ABOUT
        </h2>

       
        <div className="mt-24 md:mt-28">
          <p className="max-w-300 text-[clamp(2rem,2.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.035em]">
            I design and engineer digital products with a focus on thoughtful
            interfaces, meaningful interactions, and clean, scalable
            engineering — turning ideas into experiences people can actually
            use.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-16">
          <p className="max-w-[55ch] text-xl leading-[1.4] tracking-[-0.02em] md:text-2xl">
            My foundation is in frontend engineering, where I enjoy turning
            designs into responsive, polished web applications. I care about
            the details—from visual hierarchy and motion to performance,
            accessibility, and usability.
          </p>

          <p className="max-w-[55ch] text-xl leading-[1.4] tracking-[-0.02em] md:text-2xl">
            I'm growing toward full-stack product engineering and building
            deeper expertise in AI and system design. My goal is simple:
            understand the problem, build the right product, and take it from
            concept to deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;