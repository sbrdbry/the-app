import React, { useEffect, useState } from "react";

import { Outlet, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './root.scss';

export default function Root() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  /*const [innerHeight, setInnerHeight] = useState(0);
  const myInnerHeightRef = React.useRef(innerHeight);
  const setMyInnerHeight = data => {
    myInnerHeightRef.current = data;
    setInnerHeight(data);
  };*/

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

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        //console.log("bottom of the page");
        setScrollPercentage(100);
    }

    /*if (window.innerHeight !== myInnerHeightRef.current) {
      console.log("window.innerHeight", window.innerHeight);
      console.log("innerHeight", myInnerHeightRef.current);
      setMyInnerHeight(window.innerHeight);
    }*/
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={toggled ? "topnav responsive" : "topnav"} style={{opacity: "0.8"}} id="myTopnav">
        <NavLink to="/">Home</NavLink>        
        <NavLink to="/about">livestream</NavLink>
        <a href="#" className="icon" onClick={(event) => myFunction(event)}>
          <FontAwesomeIcon icon={faBars} />
        </a>        
      </div>
      <div className="scroll-progress" style={{backgroundImage: `linear-gradient(to right, #F7931A ${scrollPercentage}%, rgba(0,0,0,0) ${scrollPercentage}%)`}}></div>

      <main id="main" style={{marginTop: navHeight}}>
        <Outlet />
      </main>

      <div className="footer">
        <h2><a className="bitcoin-donate" href="bitcoin:bc1qae66ucqsf5nkrxwca7z93rzd8dh95793rk0f3r">bc1qae66ucqsf5nkrxwca7z93rzd8dh95793rk0f3r</a></h2>
      </div>
    </>
  )
}
