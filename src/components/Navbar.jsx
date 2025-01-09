import { useState } from "react";
import { olaylogo, close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" border-gray-200 md:bg-gray-900 navbar  text-xl ">
      <div className="   flex flex-wrap items-center justify-between my-10">
        <img src={olaylogo} alt="chaselogo" className="h-12 w-18 rounded-lg" />

        {/* desktop view */}
        <ul className=" hidden max-w-screen-2xl md:flex  flex-row md:space-x-8 font-normal rtl:space-x-reverse p-4 md:p-0 mt-4 md:mt-0 border-0  ">
          {navLinks.map((nav, index) => (
            // TODO make the nav occupy the full width
            <li
              key={nav.id}
              className={` font-semibold  text-white cursor-pointer text-[16px] ${active === nav.title
                ? " py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                : "py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                } ${index === navLinks.length - 1 ? "mr-4 " : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


        {/* toggle the menu icon and close icon */}
        <button
          type="button"
          className="inline-flex items-center  sticky  top-5 right-5 p-2 w-10 h-[10px] justify-center text-sm text-gray-500 rounded-lg md:hidden  dark:hover:bg-gray-700 dark:focus:ring-gray-600 transform -translate-x-1/3 -translate-y-1/3 z-20"
        >
          <img
            src={toggle ? close : menu
            }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </button>

        {/* show the navbar in mobile view */}
        <div
          className={`${!toggle ? "hidden" : "flex"
            } flex-col p-6 bg-gray-100 dark:bg-gray-800 absolute  top-1  left-1/2  py-5 right-2 mt-12 w-[180px] rounded-lg shadow-lg  md:hidden`}
        >
          <ul className="list-none flex  items-start gap-3 flex-col">

            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "bg-blue-500 px-3 py-1 rounded-md" : " text-gray-900 dark:text-white px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
              
            ))}
          </ul>
        </div>




      </div>
    </nav>
  );
};

export default Navbar;