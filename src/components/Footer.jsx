import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1C211C] px-5 py-10 text-bg-primary md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#8F9688]">
            For enquiries, collaboration requests or job opportunities, don't
            hesitate to reach out!
          </p>

          <h2
            className="
              mt-6
              text-[clamp(5rem,12vw,11rem)]
              font-bold
              uppercase
              leading-[0.75]
              tracking-[-0.055em]
            "
          >
            GET IN TOUCH
          </h2>
        </div>


        <div className="h-px w-full bg-[#3A4238]" />

        
        <div className="flex flex-col justify-between gap-8 py-10 md:flex-row md:items-center">
          <Link
            to={"mailto:trishabh2001@gmail.com"}
            className="
              text-[clamp(1.8rem,3.5vw,3.5rem)]
              leading-none
              tracking-[-0.035em]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            trishabh2001@gmail.com
          </Link>

          <Link
            to={"tel:+919650727640"}
            className="
              text-[clamp(1.8rem,3.5vw,3.5rem)]
              leading-none
              tracking-[-0.035em]
              text-[#8F9688]
              transition-colors
              duration-300
              hover:text-bg-primary
            "
          >
            +91 9650727640
          </Link>
        </div>


        <div className="h-px w-full bg-[#3A4238]" />

        
        <div className="flex flex-col gap-8 py-7 md:grid md:grid-cols-3 md:items-center">

          <p className="text-xs uppercase tracking-[0.06em] text-[#8F9688]">
            © {new Date().getFullYear()} RISHABH TRIPATHI
          </p>

          
          <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.06em]">
            <Link
              to={"https://github.com/draxter1891"}
              target="_blank"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              GitHub
            </Link>

            <Link
              to={"https://linkedin.com/in/tripathi-rishabh"}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              LinkedIn
            </Link>
            <Link
              to={"https://drive.google.com/file/d/1h4aXtZNJFUP2t6RZVqs4JBTaTXyOElXb/view?usp=sharing"}
              target="_blank"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Resume
            </Link>
          </div>


          <p className="text-xs uppercase tracking-[0.06em] text-[#8F9688] md:text-right">
            Created by Rishabh Tripathi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
