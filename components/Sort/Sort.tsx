import React, { ChangeEvent, FC } from "react";
import { PizzaType } from "@/app/page";
import { SortOption, sortPizzas } from "@/utils/sortPizzas";
 
interface SortProps {
  pizzas: PizzaType[];
  onSort: (sorted: PizzaType[]) => void;
}
 
const Sort: FC<SortProps> = ({ pizzas, onSort }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    const sorted = sortPizzas(pizzas, value);
    onSort(sorted);
  };
 
  return (
    <select
      id="sortBy"
      name="sortBy"
     className="
      bg-gradient-to-b from-[#dbeafe] to-[#fbcfe8]
      text-gray-800 font-semibold
      p-3 rounded-xl
      shadow-lg
      text-xl
      cursor-pointer
      focus:outline-none
      focus:ring-4 focus:ring-pink-200
      hover:shadow-[0_0_12px_rgba(219,234,254,0.7),0_0_20px_rgba(251,207,232,0.7)]
      transition-all duration-300 ease-in-out"
      onChange={handleChange}
      defaultValue=""
    >
      <option value="" disabled>
        Poredaj po:
      </option>
      <option value="name-asc">Naziv A → Z</option>
      <option value="name-desc">Naziv Z → A</option>
      <option value="price-asc">Cijena Najniža → Najviša</option>
      <option value="price-desc">Cijena Najviša → Najniža</option>
      <option value="date-newest">Najnovije Prvo</option>
      <option value="date-oldest">Najstarije Prvo</option>
    </select>
  );
};
 
export default React.memo(Sort);