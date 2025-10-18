'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Details = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const image = searchParams.get('image');

  return (
    <>
      <h1>Pizza Details</h1>
      <h3>{name}</h3>
      <Image
        alt={name}
        src={image}
        height={450}
        width={450}
        className="rounded-lg cursor-pointer"
      />
      <p>Price: {price}</p>
    </>
  );
};

export default Details;
