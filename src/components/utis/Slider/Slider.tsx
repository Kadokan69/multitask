import { useEffect, useState } from 'react';
import style from './Slider.module.scss';
import { partners } from '../../../../moc.json';

export type ISlidersProps = {
  id: string;
  img: string;
};

export type ISliderProps = {
  partners: ISlidersProps[];
};

export function Slider() {
  const [partnersItem, setPartnersItem] = useState<ISlidersProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data: Promise<ISlidersProps[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(partners);
      }, 2000);
    });

    data
      .then((result) => {
        setPartnersItem(result);
      })
      .catch((error: Error) => {
        setLoading(false);
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const slide = partnersItem.map((item) => {
    return (
      <li className={style.slide} key={item.id}>
        <img src={item.img} alt={item.img} className={style.slider_img} />
      </li>
    );
  });

  if (loading)
    return (
      <section className={`${style.slider} ${style.sceleton}`}>
        <div className={style.slider_wrapper}>
          <ul className={style.slider_items}>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
          </ul>
          <ul aria-hidden='true' className={style.slider_items}>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
            <li className={style.slide}></li>
          </ul>
        </div>
      </section>
    );

  return (
    <section className={style.slider}>
      <div className={style.slider_wrapper}>
        <ul className={style.slider_items}>{slide}</ul>
        <ul aria-hidden='true' className={style.slider_items}>
          {slide}
        </ul>
      </div>
    </section>
  );
}
