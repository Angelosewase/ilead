import Home from "./pages/Home";
import Get_started from "./pages/Get_started";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const routes = createBrowserRouter([{
  path:"/",
  element:<Home />
},{
  path:"/getStarted",
  element:<Get_started />
},{
  path:"/login",
  element:<Login />
},{
  path:"/signup",
  element:<SignUp />
}])

function App() {
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  );
}

export default App;
