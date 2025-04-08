import { Link } from 'react-router';
import style from './Footer.module.scss';
import logo from '../../assets/logo.svg';
import { FormEvent, useState } from 'react';

type TFooterForm = {
    email: string
}

export function Footer() {
  const [email, setEmail] = useState<TFooterForm>({email: ''});

  function handlerSubmit(event: FormEvent){
    event.preventDefault();
    console.log(email)
    setEmail({email: ''})
  }

  return (
    <footer className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_content}>
          <div className={style.footer_header}>
            <div className={style.footer_logo}>
              <Link to='/'>
                <img src={logo} alt='Logo' />
              </Link>
            </div>
            <nav className={style.footer_nav}>
              <Link to='#'>About us</Link>
              <Link to='#'>Services</Link>
              <Link to='#'>Use Cases</Link>
              <Link to='#'>Pricing</Link>
              <Link to='#'>Blog</Link>
            </nav>
            <div className={style.footer_social}>
              <Link to='#'>
                <img src='./src/assets/social_icon_in.svg' alt='' />
              </Link>
              <Link to='#'>
                <img src='./src/assets/social_icon_fb.svg' alt='' />
              </Link>
              <Link to='#'>
                <img src='./src/assets/social_icon_twitter.svg' alt='' />
              </Link>
            </div>
          </div>
          <div className={style.footer_body}>
            <div className={style.contact_us}>
              <h4>Contact us:</h4>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>
            <div className={style.form_subscribe}>
              <form onSubmit={handlerSubmit}>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Email'
                  value={email.email}
                  onChange={(e) => {setEmail({email: e.target.value})}}
                />
                <button type='submit'>Subscribe to news</button>
              </form>
            </div>
          </div>
          <div className={style.footer_coper}>
            <p>© 2025 Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
