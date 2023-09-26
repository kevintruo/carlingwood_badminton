import useTheme from "../../hooks/useTheme";
import Switch from "../../hooks/useTheme/Switch";

export default function Navbar() {
  const theme = useTheme();
  const { mode } = theme;

  return (
    <nav className='flex fixed w-full items-center justify-between px-6 h-16 bg-white text-black dark:bg-black dark:text-white z-10'>
      <img
        src={require(`../../static/img/Carlingwood${mode === "dark" ? "_Dark" : ""}_Cropped.png`)}
        alt='Carlingwood_Badminton_Logo'
      />
      <div className='flex gap-2'>
        <Switch />
      </div>
    </nav>
  );
}

export const EmptyNavbar = () => <nav className='w-full h-16' />;
