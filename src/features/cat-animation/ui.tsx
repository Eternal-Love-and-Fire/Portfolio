import style from './style.module.css';

export const CatAnimation = () => {
  return (
    <div className='mx-auto w-96     pb-2 shadow-[0_90px_90px_-82px_white] rounded-3xl'>
    <div className={style.cat}>
      <div className={style.ear + ' ' + style['ear--left']}></div>
      <div className={style.ear + ' ' + style['ear--right']}></div>
      <div className={style.face}>
        <div className={style.eye + ' ' + style['eye--left']}>
          <div className={style['eye-pupil']}></div>
        </div>
        <div className={style.eye + ' ' + style['eye--right']}>
          <div className={style['eye-pupil']}></div>
        </div>
        <div className={style.muzzle}></div>
      </div>
    </div></div>
  )
}
