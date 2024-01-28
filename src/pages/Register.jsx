import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfrmPassword, setCnfrmPassword] = useState("");
  const [feedback,setFeedback]=useState('');


  const handleSignUp=()=>{
    if(password !== cnfrmPassword){
      setFeedback('Passwords do not match')
      return
    }
  }

  return (
    <div className="h-[85vh] md:h-[75vh]  bg-gradient-to-r from-yellow-500 to-amber-400  grid place-items-center">
      <form>
      <div className="bg-white h-[70%] rounded-sm md:rounded-lg px-10 pb-16 grid place-items-center">
        <p className="text-center pt-4 pb-10 text-2xl font-bold text-yellow-500 ">
          Sign Up
        </p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-y-3">
            <label className="p-1 border border-transparent" htmlFor="email">
              Email :{" "}
            </label>
            <label className="p-1 border border-transparent" htmlFor="password">
              Password :{" "}
            </label>
            <label
              className="p-1 border border-transparent"
              htmlFor="cnfrmPassword"
            >
              Confirm Password :{" "}
            </label>
          </div>
          <div className="flex flex-col gap-y-3">
            <input
              className="border border-black p-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              name="email"
              type="text"
            />
            <input
              className="border border-black p-1"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
            <input
              className="border border-black p-1"
              onChange={(e) => setCnfrmPassword(e.target.value)}
              placeholder="Confirm Password"
              name="cnfrmPassword"
              id="cnfrmPassword"
              type="password"
            />
            <Link to="/login">
              <span className="text-xs underline mt-4 text-gray-400 hover:text-gray-800">
                Already have an Account,Login
              </span>
            </Link>
          </div>
        </div>
        <button className="w-[100%] mt-5 border py-2 border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400 duration-150 font-bold text-lg rounded"
        onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <span className="text-center w-[100%] text-md font-bold text-red-500">{feedback}</span>
      </form>
    </div>
  );
};

export default Register;
