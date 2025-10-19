"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Details () {
  const searchParams = useSearchParams();
  const pizzaDataString = searchParams.get("pizzaData");

  let pizzaData = null;
  try {
    const decodedData = pizzaDataString ? decodeURIComponent(pizzaDataString) : null;
    pizzaData = decodedData ? JSON.parse(decodedData) : null;
  } catch (e) {
    console.error("Invalid pizzaData in URL:", e);
  };

  const name = pizzaData?.name ?? "Unknown pizza";
  const price = pizzaData?.price ?? "N/A";

  return(
    <div className="bg-gray-200 w-55 p-5">
      <p><strong>Name: </strong>{name}</p>
      <hr/>
      <p className="mt-2"><strong>Price: </strong>{price}</p>
      <hr/>
      <p className="mt-2"><strong>Description: </strong> Nam eu fringilla felis. Curabitur in magna molestie, tristique massa nec, molestie lectus. </p>
      <button className="float-right text-orange-800 cursor-pointer"><Link href="/"><strong>Back</strong></Link></button>
    </div>
  )
}