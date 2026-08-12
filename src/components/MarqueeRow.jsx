import { useEffect, useRef } from "react";
import gsap from "gsap";

const MarqueeRow = ({ text, direction = "left", modify = "" }) => {
  const marqueeRef = useRef(null);

  const repeatedText = Array.from({ length: 4 }, (_, index) => (
    <span key={index} className="inline-block shrink-0">
      {text}
    </span>
  ));

  useEffect(() => {
    const marquee = marqueeRef.current;

    const animation = gsap.to(marquee, {
      xPercent: direction === "left" ? -50 : 0,
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    if (direction === "right") {
      gsap.set(marquee, { xPercent: -50 });
    }

    return () => animation.kill();
  }, [direction]);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <div
        ref={marqueeRef}
        className={`
          flex w-max items-center gap-[0.8em]
          text-[clamp(10rem,11vw,11rem)]
          font-bold font-[robo]
          tracking-[0.02em] leading-none
          ${modify}
        `}
      >
        <div className="flex shrink-0 gap-[0.8em] ">
          {repeatedText}
        </div>

        <div className="flex shrink-0 gap-[0.8em]">
          {repeatedText}
        </div>
      </div>
    </div>
  );
};

export default MarqueeRow;