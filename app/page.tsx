"use client";

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import { Overlay } from "@/components/Overlay/Overlay";
import { useGetCakesQuery } from "@/redux/api/cakeApi";
import { setCakeData } from "@/redux/slices/cakeDataSlice";
import { RootState, AppDispatch } from "@/redux/store";

export type CakeType = {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  description: string;
};

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: cakeData, isLoading, isError } = useGetCakesQuery();
  const sortedCakes = useSelector(
    (state: RootState) => state.cakeData.sortedCakes
  );

  useEffect(() => {
    if (cakeData) {
      dispatch(setCakeData(cakeData));
    }
  }, [cakeData, dispatch]);

  if (isLoading || isError) {
    return (
      <Overlay>
        {isLoading && <Spinner size={350} />}
        {isError && (
          <h1 className="text-red-500 text-6xl text-center">
            Error fetching cakes
          </h1>
        )}
      </Overlay>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 place-items-center p-4 mb-18">
        {sortedCakes.map((cake) => (
          <Card key={cake.id} cakeData={cake} />
        ))}
      </div>
    </main>
  );
};

export default Home;
