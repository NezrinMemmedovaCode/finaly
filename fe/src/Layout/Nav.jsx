import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

import img3 from "../img/Screenshot 2024-06-28 163604.png";

function Nav() {

  const [drop, setdrop] = useState(false)


  function show() {
    setdrop(!drop)

    
}


  document.addEventListener("scroll", function () {
   
    if (window.scrollY > 0) {
      document.querySelector(".nav").style.backgroundColor = "#AE8B69";
    } else {
      document.querySelector(".nav").style.backgroundColor = "transparent";
    }
  });

  return (
    <div className="nav">
      
      <div className="basliq">
       <h1>NathCoffee</h1>
        {/* <img src={img3} alt="" /> */}
      </div>

      <div className="time">
        <div className="date">
          {/* <p>Mon-Fri: 8am to 2pm </p>
          <p>Sat-Sun: 11am to 4pm</p> */}
          <p>
            <i className="fa-solid fa-phone"></i> +994 55 903 24 91
          </p>
          <p>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/nathreeen/?utm_source=ig_web_button_share_sheet">  nathreeen</a>
          </p>
        </div>

        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/Basket"}><i className="fa-solid fa-bag-shopping"></i></Link>
          <Link to={"/Wish"}><i class="fa-solid fa-heart"></i></Link>
         
          <Link to={"/Contact"}>Contact</Link>

        </div>
      </div>

      <button onClick={show}><i className="fa-solid fa-bars"></i></button>
        {drop && <div className="drop">
          
          <Link to={"/"}>Home</Link>
          <Link to={"/Basket"}><i className="fa-solid fa-bag-shopping"></i></Link>
          <Link to={"/Wish"}><i class="fa-solid fa-heart"></i></Link>
         
          <Link to={"/Contact"}>Contact</Link>

        
        
        
        </div>}



    </div>
  );
}

export default Nav;
