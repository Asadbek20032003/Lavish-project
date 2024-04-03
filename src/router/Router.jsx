import { createBrowserRouter } from "react-router-dom";
 import Services from '../component/pages/services/Services'
import Layout from "../layout/Layout";
import Home from "../component/pages/homePage/Home";
import Products from "../component/pages/products/Products";
import SignUp from "../component/pages/sign-up/SignUp";

const router = createBrowserRouter([
    {
        path :'/',
        element: <Layout />,
        children:[
                 {
                    element: <Home />,
                    path: '/'
                 },
                 {
                    element: <Services/>   ,
                    path: '/services'
                 },
                 {
                    element: <Products/> ,
                    path: '/products'
                 },
                 {
                    element: <SignUp/>,
                    path: '/sign-up'
                 }
        ]

    }
])
export default router;