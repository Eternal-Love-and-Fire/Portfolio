import style from "./style.module.css";

const LoadingAnimation = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className={style["loading-cat"] + " w-full h-full"}>
        <div className={style.body}></div>
        <div className={style.head}>
          <div className={style.face}></div>
        </div>
        <div className={style.foot}>
          <div className={style["tummy-end"]}></div>
          <div className={style.bottom}></div>
          <div className={style["legs left"]}></div>
          <div className={style["legs right"]}></div>
        </div>
        <div className={style["hands left"]}></div>
        <div className={style["hands right"]}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
