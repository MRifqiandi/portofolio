
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex justify-center content-center p-6">
        <div className="flex gap-10 bg-slate-700 bg-opacity-90 p-4 rounded-lg text-white ">
          <button href="/home" className=" hover:text-emerald-500">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer"
            >
              Home
            </ScrollLink>
          </button>
          <button href="/about" className="hover:text-emerald-500">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer"
            >
              About
            </ScrollLink>
          </button>
          <button className="hover:text-emerald-500">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer"
            >
              Skills
            </ScrollLink>
          </button>
          <button className="hover:text-emerald-500">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer"
            >
              Projects
            </ScrollLink>
          </button>
          <button className="hover:text-emerald-500">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-emerald-500 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
