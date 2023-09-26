import useTheme from "../../../hooks/useTheme";

export default function RightArrow() {
  const { mode } = useTheme();
  const color = mode === "dark" ? "#ffffff" : "#000000";
  return (
    <svg width='40px' height='40px' viewBox='0 0 1024 1024'>
      <path
        d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z'
        fill={color}
      />
    </svg>
  );
}
