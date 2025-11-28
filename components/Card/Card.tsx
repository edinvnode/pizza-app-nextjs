"use client";
import Image from "next/image";
import React, { FC, useRef, useEffect, useCallback } from "react";
import Modal from "@/components/Modal/Modal";
import Spinner from "../Spinner/Spinner";
import Form from "../Form/Form";
import { PizzaType } from "@/app/page";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { pizzaDetails, closeModal, pizzaEdit } from "@/redux/slices/modalSlice";
import { useDeletePizzaMutation } from "@/redux/api/pizzaApi";
import { setLoggedIn, setLoggedOut } from "@/redux/slices/authSlice";
import { useGetAdminQuery } from "@/redux/api/adminApi";
import { formatDateBS } from "@/utils/formatDate";
import toast from "react-hot-toast";

type CardProps = {
  pizzaData: PizzaType;
};

const Card: FC<CardProps> = ({ pizzaData }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [deletePizza, { isLoading: isDeleting }] = useDeletePizzaMutation();
  const sortValue = useSelector((state: RootState) => state.pizzaData.sortValue);

  const { modalType, isLoggedIn } = useSelector(
    (state: RootState) => ({
      modalType: state.modalType,
      isLoggedIn: state.auth.isLoggedIn,
    }),
    shallowEqual
  );

  const createdAt = new Date(modalType.selectedPizza?.createdAt ?? new Date());
  const { data } = useGetAdminQuery();

  const isPizzaDetails = modalType.value === "pizzaDetails";
  const isPizzaForm = ["pizzaAdd", "pizzaEdit", "pizzaOrder"].includes(
    modalType.value ?? ""
  );

  const handleBorder = useCallback((hover: boolean) => {
    if (!divRef.current) return;
    divRef.current.classList.toggle("border-gray-500", hover);
    divRef.current.classList.toggle("border-transparent", !hover);
  }, []);

  const handleLogoutTimer = useCallback(() => {
    if (!data?.expiresIn) return;

    dispatch(setLoggedIn());
    const timer = setTimeout(() => dispatch(setLoggedOut()), data.expiresIn);

    return () => clearTimeout(timer);
  }, [data, dispatch]);

  useEffect(() => {
    handleLogoutTimer();
    if (isLoggedIn) dispatch(closeModal());
  }, [handleLogoutTimer, isLoggedIn, dispatch]);

  const getModalTitle = () => {
    if (!isLoggedIn && modalType.value !== "pizzaOrder") return "Prijava 🎂";
    if (modalType.value === "pizzaAdd") return "Dodaj 🎂";
    if (modalType.value === "pizzaEdit") return "Uredi 🎂";
    if (modalType.value === "pizzaOrder") return "Naruči 🎂";
    return "";
  };

  const buttonClass = (bg: string) =>
    ` ${bg} text-gray-700 font-bold px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition h-10 ${isLoggedIn ? "w-25 text-sm" : "w-27 text-base"} cursor-pointer`;

  return (
    <div
      className="border border-transparent p-7 shadow-2xl relative flex flex-col items-center mt-10 transition-colors"
      ref={divRef}
      onMouseOver={() => handleBorder(true)}
      onMouseOut={() => handleBorder(false)}
    >
      {!isDeleting ? (
        <Image
          src={pizzaData.image}
          alt={pizzaData.name}
          width={250}
          height={250}
          className="w-[250px] h-[250px] object-cover"
          loading="lazy"
        />
      ) : (
        <Spinner size={200} />
      )}

      <div className="flex gap-2 absolute top-75">
        <button
          aria-label="View pizza"
          className={buttonClass("bg-yellow-300")}
          onClick={() => dispatch(pizzaDetails(pizzaData))}
        >
          Otvori 🎂
        </button>

        {isLoggedIn && (
          <>
            <button
              aria-label="Edit pizza"
              className={buttonClass("bg-green-300")}
              onClick={() => dispatch(pizzaEdit(pizzaData))}
            >
              Uredi 🍰
            </button>
            <button
              aria-label="Delete pizza"
              className={buttonClass("bg-red-400")}
              onClick={async () => {
                const [key, value] = sortValue.split("-");
                const sortedBy = { [key]: value };
                await deletePizza({ id: pizzaData.id, sortedBy: JSON.stringify(sortedBy)}).unwrap(); 
                toast.success("Torta uspješno izbrisana");
            }}
            >
              Izbriši 🗑️
            </button>
          </>
        )}
      </div>

      {isPizzaDetails && (
        <Modal
          isModalOpen={isPizzaDetails}
          closeModal={() => dispatch(closeModal())}
          title="Detalji 🎂"
        >
          <p>
            <strong>Naziv: </strong>
            {modalType.selectedPizza?.name ?? "Name"}
          </p>
          <hr />
          <p className="mt-2">
            <strong>Cijena: </strong>
            {modalType.selectedPizza?.price ?? "Price"} KM
          </p>
          <hr />
          <p className="mt-2">
            <strong>Objavljeno: </strong>
            {formatDateBS(createdAt)}
          </p>
          <hr />
          <p className="mt-2">
            <strong>Opis: </strong>
            {modalType.selectedPizza?.description ?? "Description"}
          </p>
        </Modal>
      )}

      {isPizzaForm && (
        <Modal
          isModalOpen={isPizzaForm}
          closeModal={() => dispatch(closeModal())}
          title={getModalTitle()}
        >
          <Form />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(Card);
