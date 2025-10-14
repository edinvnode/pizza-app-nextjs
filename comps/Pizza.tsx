// Define prop type
type PropType = {
  pizzaData: {
    id: number;
    name: string;
    price: string;
  };
};

// Use it in your component
const Pizza: React.FC<PropType> = ({ pizzaData }) => {
  return (
    <div className="border text-center">
      <h2 className="text-center">{pizzaData.name}</h2>
      <p className="text-center">Price: {pizzaData.price}</p>
    </div>
  );
};

export default Pizza;
