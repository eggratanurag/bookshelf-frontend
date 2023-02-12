import React, { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import { UserState } from "../context/userProvider";

export default function Header() {
  const Navigate = useNavigate();
  const { user, setUser } = UserState();
  
    const primaryNav = document.getElementById('primary-navigation')
    const navToggle = document.getElementsByClassName('mobile-nav-toggle')[0]
    function faltu () {
   
      const visibility = primaryNav.getAttribute('data-visible');
     
       if(visibility === "false") {
          navToggle.setAttribute('aria-expanded', true)
          primaryNav.setAttribute('data-visible',true)

       }else {
         primaryNav.setAttribute('data-visible', false)
         navToggle.setAttribute('aria-expanded', false)
       }

      
     }
 

 

  return (
    <nav>
      <div className="mainDivForHeader">
        <div className="leftDiv">
      <button
      onClick={() => faltu()}
        className="mobile-nav-toggle navlinks"
        aria-controls="primary-navigation"
        aria-expanded="false"

      >
     
          <MenuIcon style={{fontSize: "3rem"}} />
       
      </button>
          <ul data-visible="false" id="primary-navigation" className="primary-navigation">
            <li>
              <span aria-hidden="true">
                <NavLink onClick={() => faltu()} className="navlinks" to={"/"}>
                  Home
                </NavLink>
              </span>
            </li>
            <li>
              <span aria-hidden="true">
                <NavLink onClick={() => faltu()} className="navlinks" to={"/books"}>
                  buy books
                </NavLink>
              </span>
            </li>
            <li>
              <span aria-hidden="true">
                <NavLink onClick={() => faltu()} className="navlinks" to={user? "/products/"+ user._id : '/products'}>
                  sell
                </NavLink>
              </span>
            </li>
            <li>
              <span aria-hidden="true">
                <NavLink onClick={() => faltu()} className="navlinks" to={user? "/wishlist/"+ user._id : "/wishlist"}>
                  <FavoriteIcon />
                </NavLink>
              </span>
            </li>
            <li>
              <span aria-hidden="true">
                <NavLink onClick={() => faltu()} className="navlinks" to={user?"/orders/"+ user._id : "/orders"}>
                  <LocalMallIcon />
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
        <div className="rightDiv">
          
          {user ? (
            <NavLink to={"/profile/" + user._id} className="navlinks">
              profile
            </NavLink>
          ) : (
            <NavLink  className="navlinks" to={"/user/login"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
