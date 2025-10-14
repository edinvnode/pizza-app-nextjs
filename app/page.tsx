import Pizza from '@/comps/Pizza';

const data = [
  { id: 1, name: 'pizza romana', price: '10$' },
  { id: 2, name: 'pizza capricciosa', price: '15$' },
  { id: 3, name: 'pizza americana', price: '12$' },
  { id: 4, name: 'pizza quattro formaggi ', price: '16$' },
  { id: 5, name: 'pizza bianca', price: '9$' },
  { id: 6, name: 'pizza e fichi', price: '10$' },
  { id: 7, name: 'pizza casalinga ', price: '17$' },
  { id: 8, name: 'Pizza pugliese', price: '10$' },
  { id: 9, name: 'pizza mozzarella', price: '10$' },
  { id: 10, name: 'pizza fungi', price: '10$' },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      <h1 className="text-3xl font-bold underline text-center">Pizza Shop</h1>
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
