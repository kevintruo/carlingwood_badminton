import useTheme from "../../../hooks/useTheme";

export default function BurgerMenu() {
  const { mode } = useTheme();
  const color = mode === "dark" ? "#ffffff" : "#000000";
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' fill='none'>
      <path d='M4 18L20 18' stroke={color} strokeWidth='2' strokeLinecap='round' />
      <path d='M4 12L20 12' stroke={color} strokeWidth='2' strokeLinecap='round' />
      <path d='M4 6L20 6' stroke={color} strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}
