import * as React from 'react';
import style from './Banner.module.scss';
import { Heading } from '../../ui/Heading';

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
        <Heading tag='h1'>{props.title}</Heading>
        <img src={props.images} alt={props.title} />
        <p>{props.description}</p>
        {props.button}
      </div>
    </section>
  );
}
