import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { gradient1, mainbot, swirl, whatsapparrow } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".moveable", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".swirl", {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="min-h-[100vh] overflow-hidden relative">
      <div className="flex justify-center items-center h-full relative translate-y-20">
        <img
          src={mainbot}
          alt="whatsapp bot"
          height={550}
          width={550}
          className="z-10 h-[400px]  w-[400px] md:h-[500px] md:w-[500px] moveable"
        />
        <img
          loading="lazy"
          src={swirl}
          alt="swirl"
          width={700}
          height={700}
          className="absolute swirl"
        />
        <img
          loading="lazy"
          src={gradient1}
          alt="swirl"
          width={1100}
          height={1200}
          className="absolute blur-3xl opacity-30 -rotate-45 moveable max-md:w-[600px] max-md:h-[600px]"
        />
      </div>
      <div className="absolute right-10 max-md:hidden bottom-30">
        <Link className="relative flex justify-center" to="#getstarted">
          <div className="bg-brand/green-light h-10 w-10 absolute blur-2xl" />
          <img
            src={whatsapparrow}
            alt="arrow"
            width={500}
            height={500}
            className="w-20 h-20 rotate-[32deg] hover:scale-110 transition-all duration-600 ease-in-out"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
