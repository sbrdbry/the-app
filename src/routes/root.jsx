import React, { useEffect, useState } from "react";

import { Outlet, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './root.scss';
import './toggle.scss';

export default function Root() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [colorSwitch, setColorSwitch] = useState(false);

  const [ toggled, setToggled ] = useState(false);
  const [ navHeight, setNavHeight ] = useState(0);

  function myFunction(e) {
    e.preventDefault();
    setToggled(!toggled);
  }

  useEffect(() => {
    const elmnt = document.getElementById("myTopnav");
    setNavHeight(elmnt.offsetHeight + "px");
  }, [toggled]);

  function handleResize() {
    const elmnt = document.getElementById("myTopnav");
    setNavHeight(elmnt.offsetHeight + "px");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (colorSwitch) {
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [colorSwitch]);

  const handleSwitch = () => {
    //console.log("handleSwitch");
    setColorSwitch(!colorSwitch);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMatchChange = (e) => {
      setColorSwitch(e.matches);
      if (e.matches) {
        document.getElementById("color-switch").checked = true;
      }
    };
    mediaQuery.addEventListener('change', handleMatchChange);
    setColorSwitch(mediaQuery.matches);
    
    // Cleanup event listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleMatchChange);
  }, []);

  return (
    <>
      <div className={toggled ? "topnav responsive" : "topnav"} style={colorSwitch ? {background: "#000"} : {background: "#333"}} id="myTopnav">
        <NavLink to="/">Home</NavLink>        
        <NavLink to="/about">livestream</NavLink>
        <label className="switch" style={toggled ? {display: "none"} : {display: "inline-block"}}>
          <input type="checkbox" id="color-switch" onClick={handleSwitch} />
          <span className="slider round"></span>
        </label>
        <a href="#" className="icon" onClick={(event) => myFunction(event)}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>

      <div className="scroll-progress" style={toggled ? {top: "93px", backgroundImage: `linear-gradient(to right, #F7931A ${scrollPercentage}%, rgba(0,0,0,0) ${scrollPercentage}%)`} : {top: "43px", backgroundImage: `linear-gradient(to right, #F7931A ${scrollPercentage}%, rgba(0,0,0,0) ${scrollPercentage}%)`}}></div>

      <main id="main" style={{marginTop: navHeight}}>
        <Outlet context={[colorSwitch]} />
      </main>
    </>
  )
}
