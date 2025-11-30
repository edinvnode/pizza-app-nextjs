"use client";
import { ReactNode, memo } from "react";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  closeModal,
  children,
  title,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        data-testid="modal-overlay"
        className="absolute inset-0 bg-black opacity-5"
        onClick={closeModal}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        className="
          relative
          bg-gradient-to-b from-blue-100 to-pink-200
          rounded-2xl shadow-lg
          p-4 sm:p-6
          z-10
          text-lg sm:text-xl
          w-full
          max-w-xs sm:max-w-md
          overflow-y-auto max-h-screen px-4 py-4 sm:px-6
        "
      >
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-4 sm:mb-5">
          {title}
        </h1>

        {children}

        <button
          aria-label="Close modal"
          onClick={closeModal}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-700 cursor-pointer text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default memo(Modal);
