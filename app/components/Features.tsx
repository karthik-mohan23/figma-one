import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenButton from "../../public/assets/green-button.svg";
import pinkButton from "../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-14 py-14 lg:py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pr-14">
          <h3 className="font-medium text-custom-blue-700 lg:text-lg ">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-custom-gray-700 lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-custom-gray-500 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-lg">
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-custom-blue-700 lg:text-lg">
            Learn More{" "}
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pl-14">
          <h3 className="font-medium text-custom-green-500 lg:text-lg ">
            Customer Support
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-custom-gray-700 lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-custom-gray-500 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-lg">
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-custom-gray-500">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-custom-green-500 lg:text-lg">
            Learn More{" "}
            <span>
              <Image src={greenButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pr-14">
          <h3 className="font-medium text-custom-pink-500 lg:text-lg ">
            Growth Monitoring
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-custom-gray-700 lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-custom-gray-500 lg:text-lg">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div className="flex w-full gap-x-6 ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-xl font-medium text-custom-gray-700">100+</h3>
              <p className="text-custom-gray-500 ">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-xl font-medium text-custom-gray-700">800+</h3>
              <p className="text-custom-gray-500">Conse adipiscing elit</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-custom-pink-500 lg:text-lg">
            Learn More{" "}
            <span>
              <Image src={pinkButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
