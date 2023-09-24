import AnimatedTypography from "../../components/AnimatedTypography";
import Section from "../../components/Section";
import DownArrow from "../../static/svg/DownArrow";

export default function LandingPage() {
  return (
    <Section>
      <div className='flex flex-col w-full h-full items-center'>
        <div className='flex-grow' />
        <div className='animate-fade ml-5'>
          <AnimatedTypography
            textArr={["Carlingwood Badminton Club"]}
            className='text-xl font-bold text-black  dark:text-white dark:bg-black'
            repeat={true}
          />
        </div>
        <p className='text-xl font-bold text-black mt-1  dark:text-white dark:bg-black'>
          {`<Introduction Section will go here>`}
        </p>
        <div className='flex-grow' />
        <div className='rounded-full animate-bounce flex flex-col items-center mb-5'>
          <DownArrow />
          <p>Scroll to start</p>
        </div>
      </div>
    </Section>
  );
}
