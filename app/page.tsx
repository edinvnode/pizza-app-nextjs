'use client';

import Pizza from '@/comps/Pizza';
import { useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'pizza romana',
    price: '10$',
    image: '/pizza.jpg',
  },
  {
    id: 2,
    name: 'pizza capricciosa',
    price: '15$',
    image: '/pizza.jpg',
  },
  {
    id: 3,
    name: 'pizza americana',
    price: '12$',
    image: '/pizza.jpg',
  },
  {
    id: 4,
    name: 'pizza quattro formaggi ',
    price: '16$',
    image: '/pizza.jpg',
  },
  {
    id: 5,
    name: 'pizza bianca',
    price: '9$',
    image: '/pizza.jpg',
  },
  {
    id: 6,
    name: 'pizza e fichi',
    price: '10$',
    image: '/pizza.jpg',
  },
  {
    id: 7,
    name: 'pizza casalinga ',
    price: '17$',
    image: '/pizza.jpg',
  },
  {
    id: 8,
    name: 'Pizza pugliese',
    price: '10$',
    image: '/pizza.jpg',
  },
  {
    id: 9,
    name: 'pizza mozzarella',
    price: '10$',
    image: '/pizza.jpg',
  },
  {
    id: 10,
    name: 'pizza fungi',
    price: '10$',
    image: '/pizza.jpg',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      <h1
        className="text-3xl font-bold underline text-center"
        onClick={() => alert('Test!')}
      >
        Pizza Shop
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, non ex
        in aliquam libero fugiat id. Neque, debitis facere? Consectetur
        necessitatibus nemo possimus recusandae non numquam, totam quae
        quibusdam cum.
      </p>
      {data.map((pizza, index) => (
        <Pizza pizzaData={pizza} key={pizza.id} />
      ))}
    </div>
  );
}
