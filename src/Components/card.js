import style from "../styles/card.module.css";

function Card(props) {
  const { data } = props;
  return (
    <div className={style.body}>
      <div className={style.left}>
        <div className={style.left__inner}>
          <div className={style.left__inner__top}>
            <div className={style.left__inner__top_header}>{data.header}</div>
            <div className={style.left__inner__top__content}>
              {data.content}
            </div>
          </div>
          <div className={style.left__inner__base}>
            {data.tags.map((item, id) => {
              return (
                <div className={style.tag} key={id}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img src={data.img} className={style.right} alt="looks nice" />
      <a href={data.link} target="_blank" rel="noreferrer">
        <div className={style.view}>View Site</div>
      </a>
    </div>
  );
}

export default Card;
