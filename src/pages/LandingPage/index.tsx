import Section from "../../components/Section";
import DownArrow from "../../static/svg/DownArrow";

export default function LandingPage() {
  return (
    <Section>
      <div className='flex flex-col items-center w-full h-full p-5'>
        <p className='text-xl font-bold text-black mt-1  dark:text-white dark:bg-black'>
          Carlingwood Badminton Club
        </p>
        <div className='flex-grow' />
        <div className='rounded-full animate-bounce flex flex-col items-center'>
          <DownArrow />
          <p>Scroll to start</p>
        </div>
      </div>
    </Section>
  );
}
