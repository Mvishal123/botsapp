import { whastapp_chat1 } from "../../assets";
import Phone from "../phone";

const LandingCopy1 = () => {
  return (
    <section>
      <div className="section-spacing flex justify-center max-sm:-mt-40 md:py-12">
        <h1 className="text-4xl lg:text-[80px]  text-brand/green-medium leading-tight text-center font-bolotta">
          Get the magical powers of wizard in your phone with{" "}
          <span className="text-brand/green-dark">Botsapp</span>
        </h1>
      </div>
      <div className="section-spacing w-full">
        <div className="grid grid-cols-3 gap-6 w-full place-items-center">
          <Phone chatImg={whastapp_chat1} />
          <Phone
            chatImg={whastapp_chat1}
            className="max-sm:translate-y-36 sm:translate-y-60"
          />
          <Phone chatImg={whastapp_chat1} />
        </div>
      </div>
    </section>
  );
};

export default LandingCopy1;
