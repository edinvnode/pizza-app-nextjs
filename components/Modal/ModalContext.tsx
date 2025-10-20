"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type ModalType = "pizzaDetails" | "pizzaOrder" | null;

interface ModalContextProps {
  modalType: ModalType;
  open: (modal: ModalType) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const open = (modal: ModalType) => setModalType(modal);
  const close = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ modalType, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
}
