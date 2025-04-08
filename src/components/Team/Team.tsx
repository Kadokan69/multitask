import style from './Team.module.scss';
import { Title } from '../../ui/Title';
import { Link } from 'react-router-dom';
import { teams } from '../../constant/constant';

// const teams = [
//   {
//     id: 1,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   },
//   {
//     id: 2,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   },
//   {
//     id: 3,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   },
//   {
//     id: 4,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   },
//   {
//     id: 5,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   },
//   {
//     id: 6,
//     name: 'John Smith',
//     position: 'CEO and Founder',
//     descripion:
//       '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
//     images: './src/assets/team1.jpg'
//   }
// ];

export function Team() {
  return (
    <section className={style.team}>
      <div className={style.team_wrapper}>
        <Title
          title='Team'
          description='Meet the skilled and experienced team behind our successful digital marketing strategies'
          className={style.team_title}
        />

        <div className={style.team_items}>
          {teams.map((item) => {
            return (
              <article className={style.item} key={item.id}>
                <div className={style.item_title}>
                  <div className={style.image_container}>
                    <img src={item.images} alt={item.name} />
                    <div className={style.overlay}></div>
                  </div>

                  <div className='title'>
                    <h4>{item.name}</h4>
                    <span>{item.position}</span>
                  </div>
                </div>
                <div className='descripion'>
                  <p>{item.descripion}</p>
                </div>
              </article>
            );
          })}
        </div>
        <Link to='#' className=''>
          See all team
        </Link>
      </div>
    </section>
  );
}
