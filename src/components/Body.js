import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Ui from "./Ui";

const Body=()=>
{
    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
            
        },
         {
            path: "/Browse",
            element:<Browse/>
            
        },
         {
            path: "/Login",
            element:<Login/>
            
        }

    ])
    return(
        <div>
               <RouterProvider router={AppRouter}/>
        </div>
    )
}
export default Body;