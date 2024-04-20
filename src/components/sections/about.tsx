import { bot1, bot2, dash, gradient2 } from "../../assets";

const About = () => {
  return (
    <section className="max-sm:py-20" id="about">
      <div className="section-spacing">
        <h1 className="text-4xl md:text-[40px] font-bold text-white">
          Your personal{" "}
          <span className=" overflow-visible inline-block relative">
            <img
              src={dash}
              alt="curve"
              className="w-full absolute -top-10"
              width={800}
              height={28}
            />
            Whatsapp bot
          </span>{" "}
          <span className="font-bolotta text-brand/green-dark">Botsapp</span>
        </h1>
        <p className="text-slate-400">
          Access everything you need through a simple message
        </p>
      </div>
      <div className="section-spacing mt-16">
        <div className="flex justify-center items-center">
          <div className="flex items-center relative">
            <img
              src={bot2}
              alt="bot2"
              width={500}
              height={500}
              className="w-[1000px] z-10"
            />
            <img
              src={gradient2}
              alt="gradient2"
              className="absolute blur-2xl"
            />
          </div>
          <div className="text-white">
            <h1 className="font-bolotta text-lg sm:text-2xl">
              Effortless Task Management
            </h1>
            <p className="max-sm:text-xs sm:text-sm md:text-lg text-slate-300 mt-2">
              With botsapp integrated with AI, you can easily set reminders,
              find information, and complete tasks with just a message. No need
              to download additional software, just use your whatsapp.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white">
            <h1 className="font-bolotta text-lg sm:text-2xl">
              Smart Recommendations
            </h1>
            <p className="max-sm:text-xs sm:text-sm md:text-lg text-slate-300 mt-2">
              Ask the bot to find the nearest Arabian hotels with over 4-star
              ratings and 1000 reviews, or any other specific query you have in
              mind. TOG's intelligent system will provide you with accurate and
              relevant results.
            </p>
          </div>
          <div className="flex items-center relative">
            <img
              src={bot1}
              alt="bot1"
              width={500}
              height={500}
              className="w-[1000px] z-10"
            />
            <img
              src={gradient2}
              alt="gradient2"
              className="absolute blur-2xl"
            />
          </div>
        </div>
        <div className="">
          <div className="text-white mt-24">
            <h1 className="font-bolotta text-lg sm:text-2xl">
              24/7 Assistance
            </h1>
            <p className="max-sm:text-xs sm:text-sm md:text-lg text-slate-300 mt-2">
              Enjoy round-the-clock support and assistance from TOG's whatsapp
              bot. Whether you need help with scheduling, recommendations, or
              simply want to chat, the bot is always ready to help.
            </p>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <button className="px-24 py-6 border border-white bg-transparent text-white  dark:border-white relative group transition duration-200 rounded">
            <div className="absolute -bottom-2 -right-2 bg-brand/green-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 rounded" />
            <span className="relative font-bold font-bolotta">
              Try for free
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
