import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);


  useEffect(() => {
  const mm = gsap.matchMedia();

 
  mm.add("(max-width: 767px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
      .to(
        descriptionRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.12
      )
      .to(
        numberRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.2
      );
  });

  return () => mm.revert();
}, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    tl.to(
      titleRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      0,
    )
      .to(
        descriptionRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.12,
      )
      .to(
        numberRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.2,
      )
      .to(
        imageRef.current,
        {
          scale: 1.02,
          duration: 0.8,
          ease: "power2.out",
        },
        0,
      );
  };

  const handleMouseLeave = () => {
    gsap
      .timeline()
      .to(
        titleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.45,
          ease: "power2.in",
        },
        0,
      )
      .to(
        descriptionRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      )
      .to(
        numberRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        },
        0,
      )
      .to(
        imageRef.current,
        {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        0,
      );
  };

  const isImageLeft = project.direction === "left";

  return (
    <article ref={containerRef} className="relative">
      
      <div
        ref={numberRef}
        className={`
          absolute
          -top-10
          z-20
          text-xs
          font-medium
          tracking-[0.08em]
          opacity-0
          translate-y-5
          ${isImageLeft ? "left-0" : "right-0"}
        `}
      >
        0{project.id}
      </div>

      
      <div
        className={`
          relative
          z-20
          mb-8
          overflow-hidden
          ${isImageLeft ? "text-left" : "text-right"}
        `}
      >
        <h3
          ref={titleRef}
          className="
            translate-y-10
            text-[clamp(3.5rem,9vw,8rem)]
            font-bold
            leading-[0.82]
            tracking-tighter
            opacity-0
          "
        >
          {project.name}
        </h3>
      </div>

    
      <div
        className={`
          grid
          items-center
          gap-8
          md:grid-cols-12
          md:gap-12
          ${isImageLeft ? "" : ""}
        `}
      >

        <div
          className={`
            group
            relative
            overflow-hidden
            md:col-span-7
            ${isImageLeft ? "md:order-1" : "md:order-2"}
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden bg-bg-secondary">
            <img
              ref={imageRef}
              src={project.uri}
              alt={`${project.name} project preview`}
              className="
                h-full
                w-full
                object-contain
                transition-transform
                duration-700
              "
            />

            
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-text-primary/5
              "
            />

            
            <a
              href={project.liveLink}
              target={"_blank"}
              className="
                absolute
                bottom-0
                left-0
                translate-y-full
                bg-accent
                px-6
                py-4
                text-sm
                font-medium
                text-bg-primary
                transition-transform
                duration-500
                cursor-pointer
                group-hover:translate-y-0
              "
            >
              Live Link →
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              className="
                absolute
                bottom-0
                right-0
                translate-y-full
                bg-gray-600
                px-6
                py-4
                text-sm
                font-medium
                text-bg-primary
                transition-transform
                duration-500
                cursor-pointer
                group-hover:translate-y-0
              "
            >
              GitHub →
            </a>
          </div>
        </div>


        <div
          className={`
            md:col-span-5
            ${isImageLeft ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"}
          `}
        >
          <p
            ref={descriptionRef}
            className="
              max-w-[42ch]
              translate-y-8
              text-lg
              leading-[1.35]
              tracking-[-0.02em]
              opacity-0
              md:text-xl
            "
          >
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.06em] text-text-secondary">
            {project.techStack.map((tech, index) => (
              <div key={tech}>
                {index > 0 && <span>•</span>}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
