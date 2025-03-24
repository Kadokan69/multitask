import { useEffect, useRef, useState } from 'react';
import { Title } from '../../ui/Title';
import style from './Testimonials.module.scss';

interface ITestimonials {
  id: number;
  name: string;
  position: string;
  description: string;
}

const item: ITestimonials[] = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    description:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic'
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    description:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic'
  },
  {
    id: 3,
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    description:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic'
  },
  {
    id: 4,
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    description:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic'
  }
];

export function Testimonials() {
  const [data, setData] = useState<ITestimonials[]>(item);
  const [curren, setCurren] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handlerNext = () => {
    console.log(curren);
    setCurren((curren) => (curren >= data.length - 1 ? 0 : curren + 1));
  };
  const handlerPrev = () => {
    setCurren((curren) => (curren === 0 ? data.length - 1 : curren - 1));
  };

  const handlerDots = (index: number) => {
    setCurren(index);
  };

  useEffect(() => {
    if (sliderRef.current && slideRef.current) {
      const widthSlide = slideRef.current.clientWidth;
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${curren * (widthSlide + 60)}px)`;
    }
  }, [curren]);

  return (
    <section className={style.testimonials}>
      <div className={style.testimonials_wrapper}>
        <Title
          title='Testimonials'
          description='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services'
          className={style.testimonials_title}
        />

        <div className={style.testimonials_slider}>
          <div className={style.slider_items} ref={sliderRef}>
            {data.map((item, index) => {
              return (
                <article
                  ref={slideRef}
                  className={style.slider_item}
                  key={index}
                >
                  <div className={style.slider_description}>
                    <p>
                      {item.id}
                      {item.description}
                    </p>
                  </div>
                  <div className={style.slider_title}>
                    <h4>{item.name}</h4>
                    <p>{item.position}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className={style.slider_navigation}>
            <button
              className={`${style.navigation_btn} ${style.navigation_btn_prev}`}
              onClick={handlerPrev}
            ></button>
            <ul className={style.navigation_dots}>
              {data.map((_, index) => (
                <li
                  className={`${style.navigation_dot} ${
                    index === curren ? style.active : ''
                  }`}
                  key={index}
                  onClick={() => {
                    handlerDots(index);
                  }}
                ></li>
              ))}
            </ul>
            <button
              className={`${style.navigation_btn} ${style.navigation_btn_next}`}
              onClick={handlerNext}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
