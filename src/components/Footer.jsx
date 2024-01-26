import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-[100%] grid grid-cols-2 text-center  md:grid-cols-4 md:text-start text-white bg-gray-800 md:px-10 md:py-3   ">
      <div className="flex justify-center items-center md:block ">
      <NavLink to='/'><img src="/e-commerce.png"  alt="Logo" width={70} /></NavLink>
      </div>
      <div>
        <ul>
          <strong>Dummy</strong>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
        </ul>
      </div>
      <div>
        <ul>
        <strong>Dummy</strong>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
        </ul>
      </div>
      <div>
        <ul>
        <strong>Dummy</strong>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
          <li className="text-sm py-1">Dummy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer