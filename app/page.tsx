"use client";
import Card from "@/components/Card/Card";
import { useGetPizzasQuery } from "@/redux/api/pizzaApi";

export type PizzaType = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function Home() {
  const { data: pizzaData } = useGetPizzasQuery();

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center p-4">
        {pizzaData?.map((p) => (
          <Card key={p.id} pizzaData={p} />
        ))}
      </main>
    </div>
  );
}