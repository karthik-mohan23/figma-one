import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div className="py-12 lg:py-[60px]">
      <h1 className="text-custom-gray-700 text-center font-medium  text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-4 pb-10 text-center text-custom-gray-500 lg:text-lg">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-6 md:flex-row">
        <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-custom-blue-500 text-lg lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-3 text-custom-gray-500 lg:text-lg">
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$<span className="text-custom-gray-300">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-custom-gray-300">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-4 rounded-sm bg-white py-[14px] text-custom-blue-500 font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-lg bg-custom-blue-500 p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-lg lg:text-xl">
              Business
            </h3>
            <p className="pt-3 text-custom-white-300 lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              500$<span className="text-custom-white-300">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-custom-white-300">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-4 rounded-sm bg-white py-[14px] text-custom-blue-500 font-medium">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-lg bg-custom-white-300 p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-custom-blue-500 text-lg lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-3 text-custom-gray-500 lg:text-lg">
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>

            <p className="pt-4 text-base text-custom-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="pt-2 text-base text-custom-gray-500">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="mt-4 rounded-md bg-white py-[14px] text-custom-blue-500 font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
