import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <ul className="hidden lg:flex pl-[74px] gap-x-14">
          {navLinks.map((item, index) => (
            <li className="text-custom-gray-500  font-medium" key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-custom-gray-500 pr-14">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-custom-gray-500 lg:block">
            Sign in
          </span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
