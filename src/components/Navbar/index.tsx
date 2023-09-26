import Switch from "../../hooks/useTheme/Switch";
import BurgerMenu from "../../static/svg/BurgerMenu";

export default function Navbar() {
  return (
    <nav className='flex fixed w-full items-center justify-between px-1 h-16 bg-white text-black dark:bg-black dark:text-white z-10'>
      <div className='flex gap-1 ml-3 items-center'>
        <BurgerMenu />
        <a href='http://localhost:3000'>
          <img
            src={require(`../../static/img/CW1 - Full.png`)}
            alt='Carlingwood_Badminton_Logo'
            width={100}
            className='mt-5'
          />
        </a>
      </div>
      <div className='flex gap-2 mr-2'>
        <Switch />
      </div>
    </nav>
  );
}

export const EmptyNavbar = () => <nav className='w-full h-16' />;
