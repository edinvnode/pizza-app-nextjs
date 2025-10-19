'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Details = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const image = searchParams.get('image');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="border border-gray-300 rounded-xl shadow-lg bg-white p-6 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Pizza Details</h1>

        <Image
          alt={name || 'Pizza'}
          src={image || '/pizza.jpg'}
          height={300}
          width={300}
          className="rounded-lg mx-auto mb-4"
        />

        <h3 className="text-xl font-semibold mb-2 text-gray-700">{name}</h3>
        <p className="text-lg text-gray-600">Price: {price}</p>
      </div>
    </div>
  );
};

export default Details;
