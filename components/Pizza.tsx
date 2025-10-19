"use client";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import Modal from "@/components/Modal";
import { PizzaType } from "@/app/page";

type PropType = {
  pizzaData: PizzaType;
};

const Pizza: React.FC<PropType> = ({ pizzaData }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
        className="ml-3"
        width={250}
        height={250}
        src={pizzaData.image as string}
        alt={pizzaData.name}
      />
      <button
        className="absolute left-2/5 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        View More
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
