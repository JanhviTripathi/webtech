
import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import Electronics from "../components/Electronics"
import Cart from "../components/Cart"
import Grocerries from "../components/Grocerries"
import Household from "../components/Household"
import Medical from "../components/Medical"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import UpdateCard from "../UpdateCard"
import axios from "axios"


export const globalRoute=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/homePage",
            element:<HomePage/>,
            children:[
                {
                    path:"/homePage",
                    element:<Electronics/>
                },
                {
                    path:"/homePage/grocerries",
                    element:<Grocerries/>
                },
                {
                    path:"/homePage/cart",
                    element:<Cart/>
                },
                {
                    path:"/homePage/household",
                    element:<Household/>
                },
                {
                    path:"/homePage/medical",
                    element:<Medical/>,
                    loader: async ()=>{
                        let {data} = await axios.get("http://localhost:5173/homePage/medical");
                        return data;
                    }
                }
            ]
        },
        {
            path:"/updatecard/:id",
            element:<UpdateCard/>
        },
        {
            path:"/signup",
            element:<SignupPage/>
        },
        {
            path:"/login",
            element:<LoginPage/>
        }
      ]
    }
])