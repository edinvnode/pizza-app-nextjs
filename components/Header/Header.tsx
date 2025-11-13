"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { pizzaOrder } from "@/redux/slices/modalSlice";
import { setSortedPizzas } from "@/redux/slices/pizzaDataSlice";
import Sort from "../Sort/Sort";
import { useLogoutAdminMutation } from "@/redux/api/adminApi";
import { adminApi } from "@/redux/api/adminApi";
import { useGetAdminQuery } from "@/redux/api/adminApi";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const pizzaData = useSelector(
    (state: RootState) => state.pizzaData.pizzaData
  );
  const [logoutAdmin] = useLogoutAdminMutation();
  const { data: adminData } = useGetAdminQuery(); 

  const handleLogout = async () => {
    try {
      await logoutAdmin().unwrap(); 
      dispatch(adminApi.util.resetApiState());
      console.log("Logout successful");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header
      className="flex justify-between items-center bg-gray-800 text-center 
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4"
    >
      <Sort
        pizzas={pizzaData}
        onSort={(sorted) => dispatch(setSortedPizzas(sorted))}
      />

      {adminData && (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      )}

      <button
        className="cursor-pointer text-4xl"
        onClick={() => dispatch(pizzaOrder())}
      >
        🍕
      </button>
    </header>
  );
}
