import useTheme from "../../../hooks/useTheme";

export default function LeftArrow() {
  const { mode } = useTheme();
  const color = mode === "dark" ? "#ffffff" : "#000000";
  return (
    <svg height='40px' width='40px' viewBox='0 0 1024 1024'>
      <path
        d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z'
        fill={color}
      />
    </svg>
  );
}
