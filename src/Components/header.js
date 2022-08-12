import { useEffect, useState } from "react";
import style from "../styles/header.module.css";
import Button from "@mui/material/Button";

function Header() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMobile(mediaQuery.matches);
  }, []);

  return (
    <div className={style.body}>
      <p className={style.text__main}>
        I diagnose problems with <span style={{ color: "#84BD4D" }}>data</span>,
        then treat it with <span style={{ color: "#267DCC" }}>code</span>.
      </p>
      <p className={style.text__sub}>
        Hi, I'm Oyewande Oluwaseun, a Frontend\Blockchain developer. I love
        solving puzzles and constantly seek the joy i get from solving a hard
        problem or learning something new. I would love to work with you.
      </p>
      <Button style={mobile ? muiStyle.mobileButton : muiStyle.button}>
        <a
          href="mailto:seunemmanuel2255@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          Say Hi <span style={{ color: "red", marginLeft: "4px" }}>❤</span>
        </a>
      </Button>
    </div>
  );
}

const muiStyle = {
  button: {
    marginTop: "43px",
    width: "14.293%",
    height: "63px",
    border: "1px solid #ffffff",
    boxSizing: "border-box",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "28px",
    color: "#ffffff",
  },
  mobileButton: {
    marginTop: "5.5%",
    width: "168.91px",
    height: "43.08px",
    border: "0.683859px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "5.47087px",
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#ffffff",
  },
};

export default Header;
