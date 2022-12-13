import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
          <div className='footer__top-footer top-footer'>
            <ul className='top-footer__list'>
              <h1 className='top-footer__title'>Categories</h1>
              <li className='top-footer__link'>Women</li>
              <li className='top-footer__link'>Men</li>
              <li className='top-footer__link'>Shoes</li>
              <li className='top-footer__link'>Accessories</li>
              <li className='top-footer__link'>New Arrivals</li>
            </ul>
            <ul className='top-footer__list'>
              <h1 className='top-footer__title'>Links</h1>
              <li className='top-footer__link'>FAQ</li>
              <li className='top-footer__link'>Pages</li>
              <li className='top-footer__link'>Stories</li>
              <li className='top-footer__link'>Compare</li>
              <li className='top-footer__link'>Cookies</li>
            </ul>
            <div className='top-footer__list'>
              <h1 className='top-footer__title'>About</h1>
              <p className='top-footer__paragraph'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas
                dignissimos a veritatis eum exercitationem, nisi obcaecati deleniti impedit enim nam
                beatae omnis. Quos facilis incidunt blanditiis harum, nisi fuga?
              </p>
            </div>
            <div className='top-footer__list'>
              <h1 className='top-footer__title'>Contact</h1>
              <p className='top-footer__paragraph'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas
                dignissimos a veritatis eum exercitationem, nisi obcaecati deleniti impedit enim nam
                beatae omnis. Quos facilis incidunt blanditiis harum, nisi fuga?
              </p>
            </div>
          </div>
          <div className='footer__bottom-footer bottom-footer'>
            <div className='bottom-footer__left'>
              <span className='bottom-footer__logo'>Kosstore</span>
              <span className='bottom-footer__copyright'>© Copyright 2023.All Rights Reserved</span>
            </div>
            <div className='bottom-footer__right'>
              <img className='bottom-footer__img' src='/img/image8.png' alt='img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
