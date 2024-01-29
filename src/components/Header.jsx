import { NavLink, useLocation,useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NAVIGATION } from "../constants";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { totalQuantity } = useSelector((state) => state.cart);

  const location = useLocation();
  const navigate=useNavigate();

  const restrictedPages = ["login", "register"];
  const isRestrictedPage = restrictedPages.some((page) =>
    location.pathname.includes(page)
  );

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
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/men"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Men
          </NavLink>

          <NavLink
            to="/women"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Women
          </NavLink>

          <NavLink
            to="/children"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Children
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) => {
              return isActive
                ? "border-b-4 md:w-[65px] text-center block p-1 font-bold border-yellow-500 text-yellow-500"
                : "inline-block p-1  text-center md:w-[60px] text-black no-underline hover:text-yellow-500 hover:scale-110 duration-150";
            }}
          >
            Register
          </NavLink>
        </div>
      </header>

      {/*Cart and search*/}

      {isRestrictedPage ? (
        ""
      ) : (
        <div>
          <div className="w-[100%] bg-gray-700">
            <div className="w-[90vw] mx-auto flex justify-between items-center  md:gap-x-16 py-1 px-2 ">
              <div>
                <button className="block px-2 py-1 border rounded-md text-white font-bold hover:bg-white hover:text-black duration-150">
                  Contact Support
                </button>
              </div>
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="Search.."
                  className="px-2 py-1 focus:outline-none hidden md:block"
                />

                <HiOutlineMagnifyingGlass
                className="hidden md:block"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "white",
                    padding: "2px",
                    cursor: "pointer",
                  }}
                />
                <span
                 className="bg-green-500 text-white relative left-20 -top-3 rounded-full px-2"
                >{totalQuantity}</span>
                <IoCartSharp
                  style={{
                    fontSize: "3rem",
                    color: "white",
                    padding: "2px",
                    cursor: "pointer",
                    marginLeft: "30px",
                  }}
                  onClick={()=>navigate("/cart")}
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
            {NAVIGATION.map((item) => (
              <NavLink
                key={item.text}
                to={item.path}
                onClick={() => setShowMenu(!showMenu)}
                className="p-3 text-center w-[120px] mx-auto text-white no-underline hover:text-yellow-500 hover:scale-110 duration-150"
              >
                {item.text}
              </NavLink>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Header;
