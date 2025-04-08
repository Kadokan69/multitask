import * as React from 'react';
import { Info } from '../../ui/Info/Info';
import style from './CallToAction.module.scss';
import img from '../../assets/Illustration.svg'

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
          <Info
            title={props.title}
            description={props.description}
            tag='h3'
            button={props.button}
            className={style.cta_info}
          ></Info>
          <div className={style.cta_images}>
            <img src={img} alt={props.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
