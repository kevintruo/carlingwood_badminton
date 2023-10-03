import * as React from "react";
import Switch from "../../hooks/useTheme/Switch";
import BurgerMenu from "../../static/svg/BurgerMenu";
import NavDrawer from "../NavDrawer";

export default function Navbar() {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const toggleDrawer = (val: boolean) => setIsOpened(val);

  return (
    <nav className='flex fixed w-full items-center justify-between px-1 h-16 bg-white text-black dark:bg-black dark:text-white z-10'>
      <div className='flex gap-1 ml-3 items-center'>
        <div onClick={() => toggleDrawer(true)}>
          <BurgerMenu />
        </div>
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
      <NavDrawer isOpened={isOpened} toggleDrawer={toggleDrawer} />
    </nav>
  );
}

export const EmptyNavbar = () => <nav className='w-full h-16' />;
