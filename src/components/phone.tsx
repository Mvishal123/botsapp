import { phone } from "../assets";

interface PhoneProps {
  chatImg: string;
  className?: string;
}
const Phone = ({ chatImg, className = "" }: PhoneProps) => {
  return (
    <div
      className={`relative ${className}`}
    >
      <img src={phone} alt="phone" className="w-[250px] md:w-[200px] lg:w-[300px]" />
      <div className="flex justify-center items-center">
        <img
          src={chatImg}
          alt=""
          className="absolute top-2 -z-10 w-[90%] h-[97%] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Phone;
