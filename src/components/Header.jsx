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
     {/*Overlay to create glass effect*/}
      <div
        className={`md:hidden  absolute h-[100vh] w-[100%] ${
          showMenu ? `bg-white bg-opacity-10 backdrop-blur-[2px] ` : `hidden`
        }`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></div>

      {/*Header*/}
      <header
        id="header"
        className="py-1 flex justify-between px-4 md:px-20 border-b-2 border-t-4 border-t-yellow-500"
      >
        <NavLink to="/">
          <img src="/e-commerce.png" alt="Logo" width={70} />
        </NavLink>

        <div className="md:hidden z-50 flex items-center">
          {
          <RxHamburgerMenu
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          }
        </div>
 
          <div className="hidden items-center gap-x-4 md:flex ">
            {
              NAVIGATION.map((item) => (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={({isActive})=>{
                    return isActive ? 'border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500' : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150"
                  }}
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

      {/* for responsive */}

      {
          <div
            className={`md:hidden fixed top-0 left-0 z-50
             ${
              showMenu ? `translate-x-[0px]` : `translate-x-[-400px]`
              } h-[100vh] w-[50vw] transition-transform duration-100 bg-gray-700`}
          >
              <div className="flex flex-col items-center  gap-y-5 h-[100%] mt-7">
              <NavLink to="/">
                <img src="/e-commerce.png" alt="Logo" width={62} />
              </NavLink>
                {
                   NAVIGATION.map((item) => (
                    <NavLink
                      key={item.text}
                      to={item.path}
                      onClick={()=>setShowMenu(!showMenu)}
                      className="p-3 text-center w-[120px] mx-auto text-white no-underline hover:text-yellow-500 hover:scale-110 duration-150"
                    >
                      {item.text}
                    </NavLink>
                  ))
                }
            </div>
          </div>
        }

    </>
  );
};

export default Header;
