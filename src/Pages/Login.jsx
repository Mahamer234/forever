import { useState } from "react";
import { Title } from "../Components";
const Login = () => {
    const [currentStats, setcurrentStats] =useState("signup")
  return (
    <section className=" h-[100vh] sm:h-[70vh] flex justify-center items-center">
      <div className=" flex flex-col gap-4 ">
       
       {currentStats ==='signup'?  <Title text1={"sign"} text2={"Up"} />: <Title text1={"Log"} text2={"in"} />}
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="w-72 border py-2 px-4 outline-none" />
         {currentStats=== "signup"? <input type="email" placeholder="Email" className="w-72 border py-2 px-4 outline-none" />: ""} 
          <input type="text" placeholder="Name"  className="w-72 border py-2 px-4 outline-none"/>
        </form>
        <div className="flex justify-between ">
        <p> forget password?</p>
        {currentStats=== "signup"?  <p className="cursor-pointer" onClick={()=>setcurrentStats('sign in')}> login here </p> : <p  className="cursor-pointer" onClick={()=>setcurrentStats('signup')}>Creat acount</p>} 

       
        </div>
        <div className="flex justify-center">
            <button className="bg-black  py-3  px-8 outline-none font-medium text-xl text-gray-300">
                {currentStats ==='sign up'?  "Sign Up":"sign in" } </button>
       

        </div>
      </div>
    </section>
  );
};

export default Login;
