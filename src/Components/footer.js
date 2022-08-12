import style from "../styles/footer.module.css";
import logo_mobile from "../img/logo_mobile.svg";
import twitter_colored from "../img/twitter_colored.svg";
import linkedIn_colored from "../img/linkedIn_colored.svg";

function Footer() {
  return (
    <div className={style.body}>
      <div className={style.center}>
        <div className={style.logo}>
          <img alt="logo" src={logo_mobile} className={style.logo__icon} />
          <p className={style.logo__text}>Primal</p>
        </div>
        <div className={style.icon__box}>
          <a
            href="https://twitter.com/I_am_logic_?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="social icons"
              src={twitter_colored}
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
              src={linkedIn_colored}
              className={style.social__icons}
            />
          </a>
        </div>
      </div>
      <div className={style.about}>
        <div className={style.about__text}>Copyright 2022.</div>
        <div className={style.about__text}>made by me</div>
      </div>
    </div>
  );
}

export default Footer;
