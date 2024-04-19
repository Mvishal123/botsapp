import { gradient1, mainbot, swirl } from "../../assets";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex justify-center items-center md:items-end h-full relative">
        <img
          src={mainbot}
          alt="whatsapp bot"
          height={550}
          width={550}
          className="z-10 h-[400px] md:h-[550px] w-[400px] md:w-[550px]"
        />
        <img
          src={swirl}
          alt="swirl"
          width={700}
          height={700}
          className="absolute"
        />
        <img
          src={gradient1}
          alt="swirl"
          width={1100}
          height={1200}
          className="absolute blur-3xl opacity-30 -rotate-45"
        />
      </div>
    </div>
  );
};

export default Hero;
