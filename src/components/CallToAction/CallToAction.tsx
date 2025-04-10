import * as React from 'react';
import style from './CallToAction.module.scss';
import img from '../../assets/Illustration.svg'
import { Heading } from '../../ui/Heading';

export interface ICallToActionItem {
  title: string;
  description: string;
  images?: string;
  button?: React.ReactElement;
}

// interface ICallToActionProps {
//   cta: ICallToActionItem;
// }

export function CallToAction(props: ICallToActionItem) {
  return (
    <section className={style.cta}>
      <div className={style.cta_wrapper}>
        <div className={style.cta_content}>
          {/* <Info
            title={props.title}
            description={props.description}
            tag='h3'
            button={props.button}
            className={style.cta_info}
          ></Info> */}
          <div
      className={style.cta_info}
    >
      <Heading tag='h3'>{props.title}</Heading>
      <p>{props.description}</p>
      {props.button}
    </div>
          <div className={style.cta_images}>
            <img src={img} alt={props.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
