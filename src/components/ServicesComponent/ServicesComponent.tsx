import * as React from 'react';
import { Title } from '../../ui/Title';
import { Link } from 'react-router-dom';
import style from './ServicesComponent.module.scss'

export interface IServicesComponentItem {
  title: string;
  images: string;
}

export interface IServicesComponentProps {
  children?: React.JSX.Element;
  items: IServicesComponentItem[];
  link?: string;
}

export function ServicesComponent({
  items,
  link,
  ...props
}: IServicesComponentProps) {
  return (
    <section className={style.services}>
      <div className={style.services_wrapper}>
      <Title
        title='Services'
        description='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'
        className={style.services_title}
      />
      <div className={style.services_items}>
      {items.map((item, index) => {
        const title = item.title.split(' ')
        const titleLastWord = title.pop()
        return <article className={style.services_item} key={index}>
          <div className={style.item_text}>
            
          <h3 className={style.text_title}><span>{title.join(' ')}</span> <span>{titleLastWord}</span></h3>
          <Link to={link? link : '#'}>Learn more</Link>
          </div>
          <div className={style.item_img}>
          <img src={item.images} alt={item.images} />
          </div>
        </article>;
      })}
      </div>
      </div>
    </section>
  );
}
