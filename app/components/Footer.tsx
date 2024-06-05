import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

export function Footer() {
  return (
    <div className="pt-20 pb-10">
      <div className="lg:flex justify-between items-center">
        <div className="flex items-center justify-start lg:self-start gap-x-3">
          <Image src={Logo} alt="Logo" />
          <p className="font-bold text-custom-gray-500 text-[17px]">
            Karthik Mohan
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 py-6 lg:py-0 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-custom-gray-700 uppercase ">
              Company
            </h2>
            <ul className="text-custom-gray-500  font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-custom-gray-700 uppercase ">
              Help center
            </h2>
            <ul className="text-custom-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-custom-gray-700 uppercase ">
              Legal
            </h2>
            <ul className="text-custom-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-custom-gray-700 uppercase">
              Download
            </h2>
            <ul className="text-custom-gray-500  font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-between">
        <p className="pt-14 text-center text-sm font-medium text-custom-gray-300 sm:pt-5">
          © Copyright {new Date().getFullYear()}. Your Site. All rights
          reserved.
        </p>
        <div className="hidden lg:flex items-center justify-center gap-x-14 pt-10">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Feed} alt="Feed" />
          <Image src={Twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
}
