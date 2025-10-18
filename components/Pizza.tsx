import Image from 'next/image';

// Define prop type
type PropType = {
  pizzaData: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
};

// Use it in your component
const Pizza: React.FC<PropType> = ({ pizzaData }) => {
  return (
    <div className="border text-center">
      <h2 className="text-center">{pizzaData.name}</h2>
      <p className="text-center">Price: {pizzaData.price}</p>
      <Image
        className="text-center"
        width={150}
        height={150}
        src={pizzaData.image as string}
        alt={pizzaData.name}
      />
    </div>
  );
};

export default Pizza;
