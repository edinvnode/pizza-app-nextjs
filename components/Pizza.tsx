'use client';
import Image from 'next/image';
import Link from 'next/link';
import Details from '@/app/pizza/[id]/page';

interface PizzaProps {
  pizzaData: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

export default function Pizza({ pizzaData }: PizzaProps) {
  return (
    <div className="border rounded-lg shadow-md p-3 text-center hover:shadow-lg transition">
        <Link href={{ pathname: `/pizza/${pizzaData.id}`, query: { ...pizzaData } }}>
        <Image
          src={pizzaData.image}
          alt={pizzaData.name}
          width={250}
          height={250}
          className="rounded-lg cursor-pointer"
        />
      </Link>
      <h2 className="text-xl font-semibold mt-2">{pizzaData.name}</h2>
      <p className="text-gray-600">{pizzaData.price}</p>
    </div>
  );
}
