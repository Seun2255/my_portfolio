import { useEffect, useState } from "react";
import style from "../styles/navBar.module.css";
import twitter from "../img/twitter.svg";
import linkedIn from "../img/linkedIn.svg";
import logo from "../img/logo.svg";
import logo_mobile from "../img/logo_mobile.svg";
import menu from "../img/menu.svg";
import Button from "@mui/material/Button";

function NavBar() {
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMobile(mediaQuery.matches);
  }, []);

  return (
    <div className={style.body}>
      <div className={style.icon__box}>
        <a
          href="https://twitter.com/I_am_logic_?s=09"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="social icons"
            src={twitter}
            className={style.social__icons}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/seun-oyewande-6a8a0b224"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="social icons"
            src={linkedIn}
            className={style.social__icons}
          />
        </a>
      </div>
      <div className={style.logo}>
        <img
          alt="logo"
          src={mobile ? logo_mobile : logo}
          className={style.logo__icon}
        />
        <p className={style.logo__text}>Primal</p>
      </div>
      {mobile ? (
        <div className={style.navigation} onClick={() => setMenuOpen(true)}>
          <img
            alt="menu Icon"
            src={menu}
            style={{ translate: menuOpen ? "180deg" : "0deg" }}
          />
        </div>
      ) : (
        <div className={style.navigation}>
          <p className={style.navigation__text}>Projects</p>
          <p className={style.navigation__text}>Blog</p>
          <p className={style.navigation__text}>Tools</p>
        </div>
      )}
      {menuOpen && (
        <div className={style.down__menu} onClick={() => setMenuOpen(false)}>
          <div className={style.menu__container}>
            <a className={style.menu__item} href="#Projects">
              Projects
            </a>
            <a className={style.menu__item} href="#Articles">
              Articles
            </a>
            <a className={style.menu__item} href="#Skills">
              Skills
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
