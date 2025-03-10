import * as React from 'react';
import style from './Banner.module.scss';
import { Info } from '../../ui/Info/Info';

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
        <Info
          title={props.title}
          description={props.description}
          button={props.button}
        />
        <div className={style.banner_images}>
          <img src={props.images} alt={props.title} />
        </div>
      </div>
    </section>
  );
}
