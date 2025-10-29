import { ChangeEvent } from "react";
import { PizzaType } from "@/app/page";

type SortProps = {
  pizzas: PizzaType[];
  onSort: (sorted: PizzaType[]) => void;
};

export default function Sort({ pizzas, onSort }: SortProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const sortedPizzas = [...pizzas];

    switch (value) {
      case "a-z":
        sortedPizzas.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedPizzas.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "asc":
        sortedPizzas.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        sortedPizzas.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedPizzas.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "oldest":
        sortedPizzas.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "default":
        console.log("Error sorting pizzas!");
        break;
    }

    onSort(sortedPizzas);
  };

  return (
    <div className="float-left">
      <label htmlFor="sortBy" className="mr-2 text-white-700 font-medium">
        Sort by:
      </label>
      <select
        id="sortBy"
        name="sortBy"
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-gray-800 cursor-pointer transition duration-200"
        onChange={handleChange}
      >
        <option value="a-z">Name A-Z</option>
        <option value="z-a">Name Z-A</option>
        <option value="asc">Price ASC</option>
        <option value="desc">Price DESC</option>
        <option value="newest">Date Newest</option>
        <option value="oldest">Date Oldest</option>
      </select>
    </div>
  );
}
