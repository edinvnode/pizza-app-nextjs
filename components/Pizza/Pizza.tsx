"use client";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import { useRef } from "react";
import { PizzaType } from "@/app/page";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { pizzaDetails, closeModal } from "@/redux/slices/modalSlice";

type PropType = {
  pizzaData: PizzaType;
};

const Pizza: React.FC<PropType> = ({ pizzaData }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const modalType = useSelector((state: RootState) => state.modalType.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleBorder = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    e.type === "mouseover"
      ? (divRef.current.style.border = "2px solid grey")
      : (divRef.current.style.border = "2px solid transparent");
  };

  return (
    <div
      className="border p-7 shadow-2xl relative"
      ref={divRef}
      onMouseOver={handleBorder}
      onMouseOut={handleBorder}
    >
      <Image
        src={pizzaData.image as string}
        alt={pizzaData.name}
        width={250}
        height={250}
      />
      <button
        className="absolute left-2/5 cursor-pointer"
        onClick={() => dispatch(pizzaDetails())}
      >
        View More
      </button>

      <Modal
        isModalOpen={modalType === "pizzaDetails"}
        closeModal={() => dispatch(closeModal())}
      >
        <p>
          <strong>Name: </strong>
          {pizzaData?.name ?? "Pizza"}
        </p>
        <hr />
        <p className="mt-2">
          <strong>Price: </strong>
          {pizzaData?.price ?? "Price"}
        </p>
        <hr />
        <p className="mt-2">
          <strong>Description: </strong> Nam eu fringilla felis. Curabitur in
          magna molestie, tristique massa nec, molestie lectus.
        </p>
      </Modal>
    </div>
  );
};

export default Pizza;
