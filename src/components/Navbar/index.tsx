import * as React from "react";
import Switch from "../../hooks/useTheme/Switch";
import BurgerMenu from "../../static/svg/BurgerMenu";
import NavDrawer from "../NavDrawer";
import BackToTheTopFab from "../BackToTheTopFab";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [scrollTarget, setScrollTarget] = React.useState<Node | undefined>(undefined);
  const scrollTrigger = useScrollTrigger({
    target: scrollTarget,
    disableHysteresis: true,
    threshold: 500,
  });

  const toggleDrawer = (val: boolean) => setIsOpened(val);

  return (
    <div
      className='snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden styled-scrollbar styled-scrollbar-track styled-scrollbar-thumb dark:styled-scrollbar-dark dark:styled-scrollbar-track-dark'
      id='styled-scrollbar'
      ref={(node) => {
        setScrollTarget(node as Node);
      }}>
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
      <div id='back-to-top-anchor' className='invisible' />
      {children}
      <BackToTheTopFab scrollTrigger={scrollTrigger} />
    </div>
  );
}

export const EmptyNavbar = () => <nav className='w-full h-16' />;
