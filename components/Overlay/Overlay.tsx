import { FC, ReactNode } from "react";

type OverlayProps = {
  children: ReactNode;
};

export const Overlay: FC<OverlayProps> = ({ children }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-blue-100 to-pink-200 z-50"
    >
      {children}
    </div>
  );
};
