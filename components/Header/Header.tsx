"use client";
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/ModalContext";
import PizzaForm from "../Form/PizzaForm";

export default function Header() {
  const { modalType, open, close } = useModal();

  return (
    <header className="bg-gray-800 text-white text-center p-4 text-4xl">
      <button
        className="relative left-2/5 cursor-pointer"
        onClick={() => open("pizzaOrder")}
      >
        🍕
      </button>
      <Modal isModalOpen={modalType === "pizzaOrder"} closeModal={close}>
        <PizzaForm />
      </Modal>
    </header>
  );
}
