import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full text-white bg-gray-800">
      <div className="w-[80%] mx-auto grid grid-cols-2 text-center p-6 gap-4 md:p-2 md:gap-2 md:grid-cols-4 md:text-start  md:px-10 md:py-3">
      <div className="flex justify-center items-center md:block">
        <NavLink to="/">
          <img src="/e-commerce.png" alt="Logo" width={70} />
        </NavLink>
      </div>
      <div>
        <ul>
          <strong>Men</strong>
          <li className="text-sm py-1">
            <NavLink to="/men/winter-wear">Winter Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/men/summer-wear">Summer Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/men/casual-wear">Casual Wear</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <strong>Women</strong>
          <li className="text-sm py-1">
            <NavLink to="/women/winter-wear">Winter Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/women/summer-wear">Summer Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/women/casual-wear">Casual Wear</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <strong>Children</strong>
          <li className="text-sm py-1">
            <NavLink to="/children/winter-wear">Winter Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/children/summer-wear">Summer Wear</NavLink>
          </li>
          <li className="text-sm py-1">
            <NavLink to="/children/casual-wear">Casual Wear</NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer