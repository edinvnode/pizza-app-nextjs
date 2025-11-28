import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { PizzaType } from "@/app/page";
import { SortOption, sortPizzas } from "@/utils/sortPizzas";
import { setSortValue } from "@/redux/slices/pizzaDataSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { sortLabels } from "@/utils/sortPizzas";
import Cookies from "js-cookie";

interface SortProps {
  pizzas: PizzaType[];
  onSort: (sorted: PizzaType[]) => void;
}

const Sort: FC<SortProps> = ({ pizzas, onSort }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [sortByCookie, setSortByCookie] = useState<string>("");

  useEffect(() => {
    const cookieString = Cookies.get("sortedBy");
    if (cookieString) {
      const obj = JSON.parse(cookieString);
      const sortString = Object.entries(obj)
        .map(([key, value]) => `${key}-${value}`)
        .join(",");
      setSortByCookie(sortString);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    const sorted = sortPizzas(pizzas, value);
    onSort(sorted);
    dispatch(setSortValue(value));
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
      defaultValue={sortByCookie}
    >
      <option value="" disabled>
        {sortByCookie ? sortLabels[sortByCookie] : "Poredaj po:"}
      </option>
      {Object.entries(sortLabels).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Sort);
