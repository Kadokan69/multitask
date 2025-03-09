import { useEffect, useState } from 'react';
import style from './Slider.module.scss';


export type ISlidersProps = {
  id: string;
  img: string;
};

export type ISliderProps = {
  partners: ISlidersProps[];
};

export function Slider({ partners }: ISliderProps) {
  const [partnersItem, setPartnersItem] = useState(partners);

  useEffect(()=>{
    setPartnersItem(partners)
  },[partners])

  return (
    <section className={style.slider}>
        <div className={style.slider_wrapper}>
      <ul className={style.slider_items}>
        {partnersItem.map((item) => {
            return (
          <li className={style.slide} key={item.id}>
            <img
              src={item.img}
              alt={item.img}
              className={style.slider_img}
            />
          </li>)
})}
      </ul>
      <ul aria-hidden="true"  className={style.slider_items}>
        {partnersItem.map((item) => {
            return (
          <li className={style.slide} key={item.id}>
            <img
              src={item.img}
              alt={item.img}
              className={style.slider_img}
            />
          </li>)
})}
      </ul>
      </div>
    </section>
  );
}
