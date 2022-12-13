import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1565312920580-4e604d7c3ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNDE2NzM0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
      img2: 'https://images.unsplash.com/photo-1578832842586-514eb4695010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDE2NzM0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60',
      title: 'Skirt',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60',
      title: 'Hat',
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className='FeaturedProducts'>
      <div className='FeaturedProducts__container'>
        <div className='top'>
          <h1>{type} products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates modi aut ab
            in porro. Quas eos consequuntur culpa nisi? Ab inventore officiis quas numquam,
            quibusdam repudiandae odit deserunt debitis?
          </p>
        </div>
        <div className='bottom'>
          {data.map(item => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
