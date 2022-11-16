import { ISVGProps } from "../../types";

export default function ChevronRight({
  width = 20,
  height = 20,
  fill = "#fff",
}: ISVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 11"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.875017 0.871788C0.533767 1.21304 0.533767 1.76429 0.875017 2.10554L4.27002 5.50054L0.875017 8.89554C0.533767 9.23679 0.533767 9.78804 0.875017 10.1293C1.21627 10.4705 1.76752 10.4705 2.10877 10.1293L6.12502 6.11304C6.46627 5.77179 6.46627 5.22054 6.12502 4.87929L2.10877 0.863038C1.77627 0.530538 1.21627 0.530538 0.875017 0.871788Z"
        fill={fill}
      />
    </svg>
  );
}
