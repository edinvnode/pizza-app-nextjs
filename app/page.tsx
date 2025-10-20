import Pizza from '@/components/Pizza';
import { data } from '@/data/data';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <main className="flex-1 flex items-center justify-center p-4flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center p-4">
        {data.map(pizza => (
          <Pizza pizzaData={pizza} key={pizza.id} />
        ))}
      </main>
    </div>
  );
}
