import { FC } from "react";

interface SpinnerProps {
  size?: number;
}

const Spinner: FC<SpinnerProps> = ({ size = 300 }) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        data-testid="spinner-svg"
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#FFDAB9"
          stroke="#E5945A"
          strokeWidth="5"
        />
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="#FFB6C1"
          stroke="#FFA07A"
          strokeWidth="3"
        />
        <circle cx="50" cy="25" r="4" fill="#FF6347" />
        <circle cx="70" cy="50" r="4" fill="#FF6347" />
        <circle cx="30" cy="50" r="4" fill="#FF6347" />
        <circle cx="50" cy="75" r="4" fill="#FF6347" />
        <rect x="48" y="15" width="4" height="12" fill="#FF6347" rx="1" />
        <circle cx="50" cy="12" r="2" fill="#FFD700" />
      </svg>
    </div>
  );
};

export default Spinner;
