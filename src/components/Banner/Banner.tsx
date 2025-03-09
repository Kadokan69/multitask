import * as React from 'react';
import style from './Banner.module.scss';

export interface IBannerProps {
  title: string;
  description: string;
  button?: React.ReactElement;
  images: string;
}

export function Banner(props: IBannerProps) {
  return (
    <section className={style.banner}>
      <div className={style.banner_wrapper}>
        <div className={style.banner_description}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          {props.button}
        </div>
        <div className={style.banner_images}>
          <img src={props.images} alt={props.title} />
        </div>
      </div>
    </section>
  );
}
