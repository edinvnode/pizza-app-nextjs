"use client";

import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

import { pizzaAdd, pizzaOrder } from "@/redux/slices/modalSlice";
import { setSortedPizzas } from "@/redux/slices/pizzaDataSlice";
import { useLogoutAdminMutation, adminApi } from "@/redux/api/adminApi";
import { setLoggedOut } from "@/redux/slices/authSlice";
import { RootState, AppDispatch } from "@/redux/store";

import Sort from "../Sort/Sort";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [logoutAdmin] = useLogoutAdminMutation();
  const pathname = usePathname();
  const home = pathname === "/";

  const { pizzaData, isLoggedIn } = useSelector(
    (state: RootState) => ({
      pizzaData: state.pizzaData.pizzaData,
      isLoggedIn: state.auth.isLoggedIn,
    }),
    shallowEqual
  );

  const handleSort = useCallback(
    (sorted: typeof pizzaData) => dispatch(setSortedPizzas(sorted)),
    [dispatch]
  );

  const handleLogout = useCallback(async () => {
    await logoutAdmin().unwrap();
    dispatch(adminApi.util.resetApiState());
    dispatch(setLoggedOut());
    toast.success("Dođi opet, Merisa :)");
  }, [logoutAdmin, dispatch]);

  const linkHref = home ? "/about" : "/";
  const linkText = home ? "O meni" : <span className="text-4xl">🏠</span>;

  const gradientTextClass =
    "text-gray-800 bg-gradient-to-r from-[#dbeafe] to-[#fbcfe8] bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(219,234,254,0.8)] hover:scale-105 transition-all duration-300 ease-in-out";

  const orderButtonClass =
    "cursor-pointer px-6 py-2 rounded-xl font-semibold text-gray-800 bg-gradient-to-b from-[#dbeafe] to-[#fbcfe8] shadow-[0_0_10px_#dbeafe,0_0_20px_#fbcfe8] hover:shadow-[0_0_15px_#dbeafe,0_0_30px_#fbcfe8] hover:scale-105 transition-all duration-300 ease-in-out text-xl";

  return (
    <header className="flex items-center bg-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 h-20">
      <div className="flex items-center gap-20 flex-1 p-6">
        {home && <Sort pizzas={pizzaData} onSort={handleSort} />}
        <Link href={linkHref} className={`text-3xl font-bold ${gradientTextClass}`}>
          {linkText}
        </Link>
      </div>

      {home && (
        <div className="flex justify-center flex-1">
          <button onClick={() => dispatch(pizzaOrder())} className={orderButtonClass}>
            NARUČI TORTU
          </button>
        </div>
      )}

      <div className="flex items-center gap-6 flex-1 justify-end">
        {isLoggedIn && home && (
          <button
            aria-label="Logout"
            onClick={handleLogout}
            className={`text-3xl font-bold ${gradientTextClass} cursor-pointer mr-10`}
          >
            Odjavi se
          </button>
        )}

        <button aria-label="Open Pizza Order" className="cursor-pointer text-4xl p-6" onClick={() => dispatch(pizzaAdd())}>
          {home && "🎂"}
        </button>
      </div>
    </header>
  );
};

export default Header;
