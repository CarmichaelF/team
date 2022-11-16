import { ISVGProps } from "../../types";

export default function Close({
  width = 45,
  height = 45,
  fill = "#fff",
}: ISVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 47"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.94975"
        y1="5"
        x2="42"
        y2="42.0503"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="4.94975"
        x2="4.94975"
        y2="42"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
