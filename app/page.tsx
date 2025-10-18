'use_client';

import Pizza from '@/components/Pizza';

const data = [
  {
    id: 1,
    name: 'Pizza romana',
    price: '10$',
    image: '/pizza romana.jpg',
  },
  {
    id: 2,
    name: 'Pizza capricciosa',
    price: '15$',
    image: '/pizza capricciosa.jpg',
  },
  {
    id: 3,
    name: 'Pizza americana',
    price: '12$',
    image: '/pizza americana.jpg',
  },
  {
    id: 4,
    name: 'Pizza quattro formaggi',
    price: '16$',
    image: '/pizza quattro formaggi.jpg',
  },
  {
    id: 5,
    name: 'Pizza bianca',
    price: '9$',
    image: '/pizza bianca.jpg',
  },
  {
    id: 6,
    name: 'Pizza e fichi',
    price: '10$',
    image: '/pizza e fichi.jpg',
  },
  {
    id: 7,
    name: 'Pizza casalinga',
    price: '17$',
    image: '/pizza casalinga.jpeg',
  },
  {
    id: 8,
    name: 'Pizza pugliese',
    price: '10$',
    image: '/pizza pugliese.jpg',
  },
  {
    id: 9,
    name: 'Pizza mozzarella',
    price: '10$',
    image: '/pizza mozzarella.jpg',
  },
  {
    id: 10,
    name: 'Pizza fungi',
    price: '10$',
    image: '/pizza fungi.png',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 ">
      <h1 className="text-3xl font-bold underline text-center">Pizza Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 place-items-center p-4">
        {data.map((pizza, index) => (
          <Pizza pizzaData={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
