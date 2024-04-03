import React, { Component } from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom"; 
import Footer from '../component/pages/footer/Footer';


export default class Layout extends Component {
    render(){
        return(
            <div>
                <Navbar  />
                <Outlet />
                <Footer/>
            </div>
        )
    }
}
