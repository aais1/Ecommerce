import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import {NAVIGATION} from '../constants'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener("scroll", () => {
    setShowMenu(false);
  });

  return (
    <>
      <div
        className={`md:hidden  absolute h-[100vh] w-[100%] ${
          showMenu ? `bg-white bg-opacity-10 backdrop-blur-[2px] ` : `hidden`
        }`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></div>
      <header
        id="header"
        className="py-1 flex justify-between px-6 md:px-6 lg:px-10 border-b-2 border-t-4 border-t-yellow-500"
      >
        <NavLink to="/">
          <img src="/e-commerce.png" alt="Logo" width={70} />
        </NavLink>

        <div className="mdS:hidden z-50 flex items-center">
          {
          <RxHamburgerMenu
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          }
        </div>

        {
          <div
            className={`md:hidden fixed top-0 left-0 
             ${
              showMenu ? `translate-x-[0px]` : `translate-x-[-400px]`
              } h-[100vh] w-[50vw] transition-transform duration-100 bg-gray-700`}
          >
              <div className="flex flex-col items-center  gap-y-7 h-[100%] mt-10">
              <NavLink to="/">
                <img src="/e-commerce.png" alt="Logo" width={62} />
              </NavLink>
                {
                   NAVIGATION.map((item) => (
                    <NavLink
                      key={item.text}
                      to={item.path}
                      onClick={()=>setShowMenu(!showMenu)}
                      className="p-3 border-b  text-center w-[100px] mx-auto text-white no-underline hover:text-yellow-500 hover:scale-110 duration-150"
                    >
                      {item.text}
                    </NavLink>
                  ))
                }
            </div>
          </div>
        }

          <div className="hidden items-center md:flex">
            {
              NAVIGATION.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className="inline-block p-4  text-center w-[100px] mx-auto text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {item.text}
                </NavLink>
              ))
            }
          </div>

      </header>
    </>
  );
};

export default Header;
