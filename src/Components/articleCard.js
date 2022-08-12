import style from "../styles/articleCard.module.css";

function ArticleCard(props) {
  const { data } = props;
  return (
    <div className={style.body}>
      <div className={style.left}>
        <div className={style.left__inner__top}>
          <div className={style.left__inner__top_header}>{data.header}</div>
          <div className={style.left__inner__top__content}>{data.content}</div>
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
      <img src={data.img} className={style.right} alt="looks nice" />
      <a href={data.link} target="_blank" rel="noreferrer">
        <div className={style.view}>View Article</div>
      </a>
    </div>
  );
}

export default ArticleCard;
