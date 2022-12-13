import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__wrapper'>
          <nav className='navbar__nav'>
            <ul className='navbar__list navbar__list_left'>
              <li className='navbar__item'>
                <img
                  className='navbar__img'
                  src='/img/4eadb34e19ab93fa744f09ef0ada6cf4.jpg'
                  alt='img'
                />
                <KeyboardArrowDownIcon />
              </li>
              <li className='navbar__item'>
                <span>USD</span>
                <KeyboardArrowDownIcon />
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/products/1'>
                  Women
                </Link>
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/products/2'>
                  Men
                </Link>
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/products/3'>
                  Children
                </Link>
              </li>
            </ul>
            <ul className='navbar__list navbar__list_center'>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/'>
                  KOSSTORE
                </Link>
              </li>
            </ul>
            <ul className='navbar__list navbar__list_right'>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/'>
                  Homepage
                </Link>
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/'>
                  About
                </Link>
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/'>
                  Contacts
                </Link>
              </li>
              <li className='navbar__item'>
                <Link className='navbar__link' to='/'>
                  Stores
                </Link>
              </li>
              <div className='icons'>
                <SearchIcon />
                <PersonOutlineIcon />
                <FavoriteBorderIcon />
                <div className='cartIcon'>
                  <ShoppingCartTwoToneIcon />
                  <span>0</span>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
