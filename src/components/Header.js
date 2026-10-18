import { useDispatch, useSelector } from "react-redux";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
 import { addUser,removeUser } from "../utils/userSlice";
 import { useEffect } from "react";


const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
  const onSignOut =()=>
  {
    signOut(auth).then(() => {
       // Sign-out successful.
        }).catch((error) => {
        // An error happened.
         });

  }

  useEffect(()=>
    {
          onAuthStateChanged(auth, (user) => {
         if (user) {
                // user sign in
       const  {uid,email,password,displayName ,photoURL}= user;
          dispatch(addUser(
                         {   uid:uid
                            ,email:email 
                            , password:password
                            ,displayName:displayName,
                            photoURL:photoURL}
                           ));
           navigate("/browse")
       } 
       
       else {
        // User is signed out
          dispatch(removeUser());
          navigate("/");
      }
      });

    },[])
   const user = useSelector((store)=>store.user);
  return (
    <div className="absolute top-0 left-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-black/90 to-transparent px-4 py-3 sm:px-10">
      <img
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
        alt="Netflix logo"
        className="w-60 cursor-pointer sm:w-40"
      />

      {/* Right Side */}

      {user  &&
      <div className="flex items-center gap-3 sm:gap-5">

        <img
         src={user?.photoURL  || "/default-avatar.png"}
          className="h-8 w-8 cursor-pointer rounded sm:h-10 sm:w-10"
        />

        <button onClick ={onSignOut} className="rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-700 sm:px-4">
          Sign Out
        </button>

      </div>}
    </div>
  );
};

export default Header;
