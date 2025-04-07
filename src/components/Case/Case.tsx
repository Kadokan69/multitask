import React from 'react';
import { Title } from '../../ui/Title';
import style from './Case.module.scss';

// export interface ICaseProps {}

export function Case() {
  return (
    <section className={style.case}>
      <div className={style.case_wrapper}>
        <Title
          title='Case Studies'
          description='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'
          className={style.case_title}
        />
        <div className={style.case_items}>
          <article className={style.item}>
            <p className={style.text}>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a className={style.link} href='#'>
              Learn more
            </a>
          </article>
          <article className={style.item}>
            <p className={style.text}>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a className={style.link} href='#'>
              Learn more
            </a>
          </article>
          <article className={style.item}>
            <p className={style.text}>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a className={style.link} href='#'>
              Learn more
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
