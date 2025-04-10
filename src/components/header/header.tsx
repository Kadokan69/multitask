import { Link } from 'react-router';
import style from './header.module.scss';
import logo from '../../assets/logo.svg';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className='header_logo'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <nav
          className={
            isOpenMenu
              ? `${style.header_nav} ${style.open_menu}`
              : style.header_nav
          }
        >
          <Link to='#'>About us</Link>
          <Link to='#'>Services</Link>
          <Link to='#'>Use Cases</Link>
          <Link to='#'>Pricing</Link>
          <Link to='#'>Blog</Link>
          <Link
            to='#'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Request a quote
          </Link>
        </nav>
        <button
          className={isOpenMenu
            ? `${style.menu_btn} ${style.menu_btn_close}` : style.menu_btn}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span
            className={
              style.menu_burger
            }
          ></span>
        </button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
