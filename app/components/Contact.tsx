import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

export function Contact() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-8 text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-white text-[32px] font-medium lg:text-14 leading-[64px] ">
        Monitor your website like a pro
      </h1>
      <p className="text-white pt-6 lg:pt-12 lg:text-lg">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-10 flex flex-col w-full items-center lg:mt-14 lg:flex-row lg:justify-center gap-x-10">
        <button className="py-4 px-8 bg-custom-white-500 rounded-sm text-pink-500 w-fit font-medium">
          Try for free
        </button>

        <button className="flex w-full items-center justify-center gap-x-3 mt-8 text-white font-medium lg:w-fit lg:mt-0">
          Contact Sales{" "}
          <span>
            <Image src={Arrow} alt="Learn More" />
          </span>
        </button>
      </div>
    </div>
  );
}
