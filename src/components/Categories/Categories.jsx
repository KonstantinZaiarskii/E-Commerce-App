import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='categories__container'>
        <div className='categories__wrapper'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://img.freepik.com/free-psd/white-t-shirt-model-front-view-mockup_125540-861.jpg?size=626&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                alt='img'
              />
              <button>
                <Link className='Link' to='/products/1'>
                  Sale
                </Link>
              </button>
            </div>
            <div className='row'>
              <img
                src='https://img.freepik.com/premium-psd/person-with-excited-expression-pointing-tshirt-mockup_23-2149106999.jpg?size=338&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                alt='img'
              />
              <button>
                <Link className='Link' to='/products/2'>
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://img.freepik.com/free-psd/man-wearing-hoodie-mockup_125540-549.jpg?size=626&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                alt='img'
              />
              <button>
                <Link className='Link' to='/products/3'>
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className='col col-l'>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <img
                    src='https://img.freepik.com/free-psd/simple-white-hoodie-mockup-psd-comfortably-sporty-menswear_53876-98582.jpg?size=338&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                    alt='img'
                  />
                  <button>
                    <Link className='Link' to='/products/4'>
                      Men
                    </Link>
                  </button>
                </div>
              </div>
              <div className='col'>
                <div className='row'>
                  {' '}
                  <img
                    src='https://img.freepik.com/free-psd/tattooed-woman-blue-linen-shirt-holding-black-tote-bag_53876-113647.jpg?size=626&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                    alt='img'
                  />
                  <button>
                    <Link className='Link' to='/products/5'>
                      Accessories
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className='row'>
              <img
                src='https://img.freepik.com/premium-psd/side-view-premium-shoes-mockup_473561-175.jpg?size=338&ext=jpg&ga=GA1.2.1247233022.1669981955&semt=sph'
                alt='img'
              />
              <button>
                <Link className='Link' to='/products/6'>
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
