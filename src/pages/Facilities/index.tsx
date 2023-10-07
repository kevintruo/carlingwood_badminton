import Section from "../../components/Section";

export default function Facilities() {
  return (
    <Section>
      <div className='flex flex-row w-screen h-screen justify-between p-5'>
        <div className='flex flex-col w-full gap-2'>
          <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>Facilities</p>
          <p>Carlingwood Badminton Club plays at two different locations in west-end Ottawa:</p>
          <div className='w-full h-full flex flex-col justify-evenly gap-3'>
            <div className='flex flex-row gap-2 h-full'>
              <iframe
                title='Confederation High School'
                src='https://maps.google.com/maps?q=2410%20Georgina%20Drive&t=&z=15&ie=UTF8&iwloc=&output=embed'
                height={"100%"}
                width={"70%"}
              />
              <div>
                <p className='underline'>TUESDAYS</p>
                <p>7 - 10 PM</p>
                <p className='font-medium'>Confederation High School</p>
                <p>1645 Woodroffe Avenue</p>
                <p>Ottawa, ON K2G 0C4</p>
              </div>
            </div>
            <div className='flex flex-row gap-2 h-full'>
              <iframe
                title='Woodroffe High School'
                src='https://maps.google.com/maps?q=1645%20woodroffe%20ave&t=&z=15&ie=UTF8&iwloc=&output=embed'
                height={"100%"}
                width={"70%"}
              />
              <div>
                <p className='underline'>WEDNESDAYS</p>
                <p>7:15 - 10:15 PM</p>
                <p className='font-medium'>Woodroffe High School</p>
                <p>2410 Georgina Drive</p>
                <p>Ottawa, ON K2B 7M7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
