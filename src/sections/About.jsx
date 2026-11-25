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
            Hi, I'm Rishabh Tripathi - a Software Developer who loves building clean, adjustable web applications from the ground up, in actual application.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-16">
          <p className="max-w-[55ch] text-xl leading-[1.4] tracking-[-0.02em] md:text-2xl">
            End-to-end web development is combined employing the MERN stack (MongoDB, Express, React, Node.js) with strong core engineering fundamentals in Java, Low-Level Design (LLD), and Data Structures & Algorithms, in many respects. And thus, Whether I'm crafting a responsive user interface or structuring modular, maintainable backend logic using SOLID principles, I emphasize on writing code that's both efficient and easy to scale, on the whole.
          </p>

          <p className="max-w-[55ch] text-xl leading-[1.4] tracking-[-0.02em] md:text-2xl">
            Check out my projects below, or feel free to reach out! Until now, I'm looking for Software Developer or Full Stack roles where I can tackle real-world problems and build impactful products, broadly speaking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;