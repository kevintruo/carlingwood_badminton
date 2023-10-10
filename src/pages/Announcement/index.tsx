import Section from "../../components/Section";

export default function Announcement() {
  return (
    <Section id='announcement'>
      <p className='text-lg font-semibold text-black  dark:text-white dark:bg-black underline'>
        Announcements:
      </p>
      <p className='text-lg font-bold text-red-500'>2023-2024 Season is in progress</p>
      <div className='p-3 w-full'>
        <p className='inline font-bold'>Sept 19th, 2023</p> - WE ARE BACK! we've booked the courts,
        steamed our birds and done our yearly sweatband wash.
        <br /> We have received confirmation for both Tuesday play at Confederation High School and
        Wednesday play at Woodroffe High School. We are not accepting new members at this time.
      </div>

      <br />
      <p className='text-red-500 text-xl font-semibold dark:text-white dark:bg-black underline'>
        COVID Related Info:
      </p>
      <div className='p-3 w-full inline'>
        <p className='inline font-bold'>Important Notice:</p> The club requires all members and
        guests to be <p className='inline underline font-semibold'>fully vaccinated</p> to play at
        this private club. You will be asked to provide proof of full vaccination before your
        membership or guest play is finalized.
      </div>
      <br />
      <br />
      <p className='text-slate-500 text-sm'>
        * Note: All Carlingwood Badminton Club Members and guests must be 18 years of age or older
      </p>
    </Section>
  );
}
