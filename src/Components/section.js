import { useEffect, useState } from "react";
import style from "../styles/section.module.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import arrow from "../img/arrow_down.svg";
import ProjectGridBox from "./projectGridBox";
import ArticleCard from "./articleCard";
import { web2, web3, articles } from "../data";
import icons from "../icons";

function Section() {
  const [mobile, setMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [web, setWeb] = useState(web3);

  const openMenu = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    if (index === 0) {
      setWeb(web3);
    } else {
      setWeb(web2);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["web3", "web2"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setMobile(mediaQuery.matches);
  }, []);

  return (
    <div className={style.body}>
      <div className={style.category}>
        <p className={style.category__text}>Some of my work</p>
        <div className={style.drop__down__box}>
          <Button
            sx={
              mobile
                ? {
                    width: "259px",
                    height: "37.57px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "7px 7px 7px 10px",
                    background: "#031720",
                    borderRadius: "8px",
                    margin: "0%",
                  }
                : {
                    width: "220px",
                    height: "54px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 8px 8px 12px",
                    background: "#031720",
                    borderRadius: "8px",
                    margin: "0%",
                  }
            }
            onClick={handleClickListItem}
          >
            <span className={style.drop__down__text}>
              {options[selectedIndex]}
            </span>
            <img src={arrow} alt="arrow" className={style.drop__down__icon} />
          </Button>
        </div>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
          sx={{
            color: "#AAAAAA",
            width: "250px",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div className={style.projects} id="Projects">
        <ProjectGridBox data={web} />
      </div>
      <div className={style.section2__background} id="Articles">
        <div className={style.section2}>
          <div className={style.section__header}>Sometimes, I write</div>
          <div className={style.articles__outer}>
            <div className={style.articles}>
              {mobile ? (
                <ProjectGridBox data={articles} />
              ) : (
                articles.map((item, id) => {
                  return <ArticleCard data={item} key={id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.section3} id="Skills">
        <div className={style.section__header2}>
          Some of the tools I use to solve problems
        </div>
        <div className={style.top__skills}>
          <img className={style.logos} alt="a skill logo" src={icons.react} />
          <img className={style.logos} alt="a skill logo" src={icons.figma} />
          <img
            className={style.logos}
            alt="a skill logo"
            src={icons.materialui}
          />
          <img
            className={style.logos}
            alt="a skill logo"
            src={icons.javascript}
          />
          <img
            className={style.logos}
            alt="a skill logo"
            src={icons.solidity}
          />
        </div>
        <div className={style.bottom__skills}>
          <img className={style.logos} alt="a skill logo" src={icons.nextjs} />
          <img className={style.logos} alt="a skill logo" src={icons.html} />
          <img className={style.logos} alt="a skill logo" src={icons.css} />
          <img className={style.logos} alt="a skill logo" src={icons.python} />
          <img
            className={style.logos}
            alt="a skill logo"
            src={icons.typescript}
          />
          <img className={style.logos} alt="a skill logo" src={icons.git} />
        </div>
        <div className={style.mobile__layer__container}>
          <div className={style.mobile__layer}>
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.react}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.figma}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.materialui}
            />
          </div>
          <div className={style.mobile__layer}>
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.javascript}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.solidity}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.nextjs}
            />
          </div>
          <div className={style.mobile__layer}>
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.html}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.css}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.python}
            />
          </div>
          <div className={style.mobile__layer}>
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.typescript}
            />
            <img
              className={style.mobile__logos}
              alt="a skill logo"
              src={icons.git}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
