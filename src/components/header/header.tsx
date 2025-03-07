import { Link } from "react-router";
import style from './header.module.scss'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className='header_logo'>
        <Link to="/" >
          <img src={logo} alt='Logo' />
        </Link>
        </div>
        <nav className={style.header_nav}>
          <Link to="#">About us</Link>
          <Link to="#">Services</Link>
          <Link to="#">Use Cases</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Blog</Link>
          <Link to='#' onClick={() => {console.log('asdad')}}>Request a quote</Link>
        </nav>
      </div>
    </header>
  )
}