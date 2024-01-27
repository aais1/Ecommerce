import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-[100%] grid grid-cols-2 text-center p-6 gap-4 md:p-2 md:gap-2 md:grid-cols-4 md:text-start text-white bg-gray-800 md:px-10 md:py-3   ">
      <div className="flex justify-center items-center md:block ">
      <NavLink to='/'><img src="/e-commerce.png"  alt="Logo" width={70} /></NavLink>
      </div>
      <div>
        <ul>
          <strong>Men</strong>
          <li className="text-sm py-1">Winter Wear</li>
          <li className="text-sm py-1">Summer Wear</li>
          <li className="text-sm py-1">Casual Wear</li>
        </ul>
      </div>
      <div>
        <ul>
        <strong>Women</strong>
          <li className="text-sm py-1">Winter Wear</li>
          <li className="text-sm py-1">Summer Wear</li>
          <li className="text-sm py-1">Casual Wear</li>
        </ul>
      </div>
      <div>
        <ul>
        <strong>Children</strong>
          <li className="text-sm py-1">Winter Wear</li>
          <li className="text-sm py-1">Summer Wear</li>
          <li className="text-sm py-1">Casual Wear</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer