"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type PropType = {
  pizzaData: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
};

const Pizza: React.FC<PropType> = ({ pizzaData }) => {

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleBorder = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    if (e.type === "mouseenter") {
      divRef.current.style.border = "2px solid grey";
    } else if (e.type === "mouseleave") {
      divRef.current.style.border = "2px solid transparent";
    }
  };

  return (
    <div className="border cursor-pointer p-7 shadow-2xl" ref={divRef} onMouseEnter={handleBorder} onMouseLeave={handleBorder}>
      <Link href={{pathname: '/about', query: { pizzaData: JSON.stringify(pizzaData)}}}>
        <Image
          className="ml-3"
          width={150}
          height={150}
          src={pizzaData.image as string}
          alt={pizzaData.name}
        />
      </Link>
    </div>
  );
};

export default Pizza;
