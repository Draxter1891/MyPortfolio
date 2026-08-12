import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/projects";

const FeaturedWork = () => {
  return (
    <section
      className="
        bg-bg-primary
        px-4
        py-20
        text-text-primary
        sm:px-6
        sm:py-24
        md:px-8
        md:py-32
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Introduction */}
        <div
          className="
            mb-24
            flex
            min-h-[55vh]
            flex-col
            items-center
            justify-center
            text-center
            sm:mb-28
            md:mb-32
            md:min-h-[70vh]
          "
        >
          <span
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-text-secondary
              sm:text-xs
            "
          >
            Selected Projects
          </span>

          <h2
            className="
              w-full
              text-[clamp(3.5rem,16vw,9rem)]
              font-bold
              leading-[0.82]
              tracking-tighter
              sm:text-[clamp(4.5rem,13vw,9rem)]
            "
          >
            FEATURED
            <br />
            WORK
          </h2>

          <p
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.08em]
              text-text-secondary
              sm:mt-8
              sm:text-xs
            "
          >
            [ SCROLL TO EXPLORE ]
          </p>
        </div>

        {/* Projects */}
        <div
          className="
            space-y-32
            sm:space-y-40
            md:space-y-72
          "
        >
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;