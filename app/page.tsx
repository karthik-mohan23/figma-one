import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
      </div>
    </>
  );
}
export default page;
