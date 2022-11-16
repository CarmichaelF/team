import { ISVGProps } from "../../types";

export default function Hamburguer({
  width = 19,
  height = 12,
  fill = "#fff",
}: ISVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 14"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="18"
        y2="1"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="7"
        x2="18"
        y2="7"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="13"
        x2="18"
        y2="13"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
