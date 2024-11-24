import { useEffect, useState } from "react";

import { Outlet, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './root.scss';

export default function Root() {
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

  return (
    <>
      <div className={toggled ? "topnav responsive" : "topnav"} id="myTopnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/about">livestream</NavLink>
        <a href="#" className="icon" onClick={(event) => myFunction(event)}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>

      <main id="main" style={{marginTop: navHeight}}>
        <Outlet />
      </main>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  )
}
