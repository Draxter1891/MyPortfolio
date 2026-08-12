import MarqueeRow from "../components/MarqueeRow";
import me from "../assets/me.png";
import About from "./About";

const Hero = () => {
  return (
    <section className="relative h-screen isolate w-full overflow-hidden">
      <MarqueeRow
        text="WEB APPLICATIONS"
        direction="right"
        modify="absolute top-2/3 z-0 -translate-y-1/2 bg-red-950 text-bg-primary"
      />

      <div className="absolute h-fit bottom-0 w-full z-10 ">
        <img
          src={me}
          alt="Me"
          className="
          object-cover
          z-10
          h-120
          w-auto
          mx-auto
          grayscale
        "
        />
      </div>

      <MarqueeRow
        text="FRONTEND DEVELOPER"
        direction="left"
        modify="absolute inset-x-0 top-1/3 sm:top-1/5 z-20 text-white mix-blend-difference"
      />

      <MarqueeRow
        text="AI-POWERED PRODUCTS"
        direction="left"
        modify="absolute inset-x-0 bottom-0 sm:-bottom-10 z-20 text-white mix-blend-difference"
      />
    </section>
  );
};

export default Hero;
