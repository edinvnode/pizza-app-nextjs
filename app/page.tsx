'use client';

import Pizza from '@/comps/Pizza';
import { useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'pizza romana',
    price: '10$',
    image: '/pizza romana.jpg',
  },
  {
    id: 2,
    name: 'pizza capricciosa',
    price: '15$',
    image: '/pizza capricciosa.jpg',
  },
  {
    id: 3,
    name: 'pizza americana',
    price: '12$',
    image: '/pizza americana.jpg',
  },
  {
    id: 4,
    name: 'pizza quattro formaggi',
    price: '16$',
    image: '/pizza quattro formaggi.jpg',
  },
  {
    id: 5,
    name: 'pizza bianca',
    price: '9$',
    image: '/pizza bianca.jpg',
  },
  {
    id: 6,
    name: 'pizza e fichi',
    price: '10$',
    image: '/pizza e fichi.jpg',
  },
  {
    id: 7,
    name: 'pizza casalinga',
    price: '17$',
    image: '/pizza casalinga.jpeg',
  },
  {
    id: 8,
    name: 'pizza pugliese',
    price: '10$',
    image: '/pizza pugliese.jpg',
  },
  {
    id: 9,
    name: 'pizza mozzarella',
    price: '10$',
    image: '/pizza mozzarella.jpg',
  },
  {
    id: 10,
    name: 'pizza fungi',
    price: '10$',
    image: '/pizza fungi.png',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 ">
      <h1
        className="text-3xl font-bold underline text-center"
        onClick={() => alert('Test!')}
      >
        Pizza Shop
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center p-4">
        {data.map((pizza, index) => (
          <Pizza pizzaData={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
