import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-5 lg:px-[280px] ">
        <h1 className="text-center text-[32px]  leading-10 font-medium text-custom-gray-700 lg:text-[64px] lg:leading-[72px] ">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-custom-gray-500 lg:text-[18px]  lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-custom-blue-500 w-1/2 py-4 px-8 text-white rounded-[4px] md:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-custom-blue-500 flex items-center justify-center gap-x-2 md:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-full"
        />

        <div className="absolute  flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-5 h-[350px]  md:-mb-20 md:h-[450px]  lg:h-[500px] lg:-mb-16 xl:-mb-28 xl:h-auto  xl:w-[68%]"
          />

          <div className=" flex w-full flex-col items-center lg:container  lg:flex-row lg:justify-between lg:items-center lg:px-20 ">
            <p className="text-custom-white-500 text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="flex flex-col   items-center justify-center lg:flex-row  lg:justify-between lg:items-center  px-5  ">
              <div className="flex items-center gap-8">
                <Image src={Google} alt="google logo" />
                <Image src={Slack} alt="slack logo" />
              </div>
              <div className="flex items-center gap-8">
                <Image src={Truspilot} alt="Truspilot logo" />
                <Image src={Cnn} alt="Cnn logo" />
                <Image src={Cluth} alt="Cluth logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
