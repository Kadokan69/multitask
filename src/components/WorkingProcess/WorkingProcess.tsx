import { useState } from 'react';
import style from './WorkingProcess.module.scss';
import { Title } from '../../ui/Title';
import { Heading } from '../../ui/Heading';

// export interface IWorkingProcessProps {}

export function WorkingProcess() {
  const [isActive, setIsActive] = useState(1);

  const steps = [
    {
      id: 1,
      title: '01 Consultation',
      description:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      id: 2,
      title: '02 Research and Strategy Development',
      description:
        'We conduct thorough research and develop a tailored strategy to achieve your business goals.'
    },
    {
      id: 3,
      title: '03 Implementation',
      description:
        'We put the strategy into action, ensuring all elements are executed effectively.'
    },
    {
      id: 4,
      title: '04 Monitoring and Optimization',
      description:
        'We continuously monitor the results and optimize the strategy for better performance.'
    }
  ];

  function handlerActive(id: number) {
    if (id === isActive) {
      return setIsActive(0);
    }
    setIsActive(id);
  }

  return (
    <section className={style.working}>
      <div className={style.working_wrapper}>
        <Title
          title='Our Working Process'
          description='Step-by-Step Guide to Achieving Your Business Goals'
          className={style.working_title}
        />

        <div className={style.working_items}>
          {steps.map((item) => {
            return (
              <article
                className={
                  isActive === item.id
                    ? `${style.working_item} ${style.open}`
                    : style.working_item
                }
                onClick={() => handlerActive(item.id)}
                key={item.id}
              >
                <Heading tag='h3'>{item.title}</Heading>
                <p className={isActive === item.id ? style.description : ''}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
