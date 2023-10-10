import * as React from "react";
import Section from "../../components/Section";
import LeftArrow from "../../static/svg/LeftArrow";
import RightArrow from "../../static/svg/RightArrow";

export default function LandingPage() {
  return (
    <Section className='gap-2 items-center'>
      <p className='text-xl font-bold text-black  dark:text-white dark:bg-black'>
        Carlingwood Badminton Club
      </p>
      <ImageList />
    </Section>
  );
}

const ImageList = () => {
  const itemData = React.useMemo(
    () => [
      {
        img: "https://plus.unsplash.com/premium_photo-1664304753883-923c28de6b85",
        title: "Breakfast",
      },
      {
        img: "https://images.unsplash.com/photo-1559309106-ed14040fd35d",

        title: "Burger",
      },
      {
        img: "https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e",
        title: "Camera",
      },
      {
        img: "https://images.unsplash.com/photo-1626926938421-90124a4b83fa",
        title: "Coffee",
      },
      {
        img: "https://images.unsplash.com/photo-1614058585909-031fc6e4f0bb",
        title: "Hats",
      },
    ],
    []
  );

  const [currIndex, setCurrIndex] = React.useState<number>(0);

  const incrementCallback = React.useCallback(() => {
    setCurrIndex((prevIndex) => {
      if (prevIndex < itemData.length - 1) prevIndex++;
      return prevIndex;
    });
  }, [itemData.length]);

  const decrementCallback = React.useCallback(() => {
    setCurrIndex((prevIndex) => {
      if (prevIndex > 0) prevIndex--;
      return prevIndex;
    });
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (currIndex < itemData.length - 1) incrementCallback();
      else setCurrIndex(0);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currIndex, itemData.length, incrementCallback, decrementCallback]);

  return (
    <div className='flex-grow flex items-center w-full h-full relative'>
      <div
        className='absolute top-[50%] rounded-full hover:bg-slate-700 p-1 pl-0'
        onClick={() => decrementCallback()}>
        <LeftArrow />
      </div>
      <img
        className='object-scale-down w-full h-full'
        src={itemData[currIndex].img}
        alt=''
        loading='lazy'
      />
      <div
        className='absolute top-[50%] right-0 rounded-full hover:bg-slate-700 p-1 pr-0'
        onClick={() => incrementCallback()}>
        <RightArrow />
      </div>
    </div>
  );
};
