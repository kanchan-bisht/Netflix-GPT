import { useRef, useState } from "react";
import Header from "./Header";
import { validData } from "../utils/validate";

const Login=()=>
{

    const[signIn , setsignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const [error, seterror] = useState(null);
    const onHandle = ()=>
    {
        setsignIn(!signIn);
    }
    const onValid=()=>{
      const msg =  validData(email.current.value,password.current.value);
      seterror(msg);
        
    }
    return(
        <div className="absolute">
              <Header/>
    
        <div>
            <form   onSubmit={(e)=>e.preventDefault()} className="absolute  w-3/12 bg-black  mx-auto my-36  p-24  right-0 left-0  bg-opacity-80 text-white rounded-lg">
            <h1 className="text-2xl font-bold">
                {
                signIn ?" Sign In" : "Sign Up"
                }</h1>
                {!signIn&& <input className="p-4 my-3 w-full"  type="text" placeholder="enter name"/>}
                 <input 
                 ref={email}
                 className="p-4  bg-slate-300 my-3 w-full"  type="text" placeholder="enter email"/>
                 <input
                 ref={password}
                 type="password" placeholder="enter password" className="bg-slate-300 p-4 my-4 w-full"/>
                 <button   className="m -2 p-2  w-full bg-red-800 "  onClick={onValid}>
                    {
                signIn ?" Sign In" : "Sign Up"
                }</button>
            <p className="text-red-700">{error}</p>
            <p className=" cursor-pointer py-4" onClick={onHandle} > { signIn ?"New to Netflix? sign up now" : "Alreaddy registered ?Sign in now"}</p>
        </form>
          <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
        alt="Netflix bacckground"  
           />
        </div>

        
        </div>
    )
}
export default Login;