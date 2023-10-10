import Section from "../../components/Section";

export default function Announcement() {
  return (
    <Section id='announcement'>
      <div className='flex flex-row w-full justify-between p-5 text-center'>
        <div className='flex flex-col w-full'>
          <p className='text-xl font-semibold text-black  dark:text-white dark:bg-black underline'>
            Announcements:
          </p>
          <div className='p-3 w-full'>
            <p className='inline font-bold'>Sept 19th, 2023</p> - WE ARE BACK! we've booked the
            courts, steamed our birds and done our yearly sweatband wash.
            <br /> We have received confirmation for both Tuesday play at Confederation High School
            and Wednesday play at Woodroffe High School. We are not accepting new members at this
            time.
          </div>
          <p className='text-xl font-semibold text-black  dark:text-white dark:bg-black underline'>
            Guest play for 2023-2024:
          </p>
          <div className='p-3 w-full inline'>
            Guests play is currently <p className='inline text-red-500'>closed</p>. When available,
            guests must apply using the guest signup forms below. <br />
            <p className='inline font-medium'>
              Guests who show up without the express permission of club executives will be turned
              away.
            </p>{" "}
            <br />
            <a href='url' className='underline text-blue-500'>
              Click here to signup
            </a>
          </div>
          <br />
          <p className='text-red-500 text-xl font-semibold dark:text-white dark:bg-black underline'>
            COVID Related Info:
          </p>
          <div className='p-3 w-full inline'>
            <p className='inline font-bold'>Important Notice:</p> The club requires all members and
            guests to be <p className='inline underline font-semibold'>fully vaccinated</p> to play
            at this private club. You will be asked to provide proof of full vaccination before your
            membership or guest play is finalized.
          </div>
          <br />
          <br />
          <p className='text-slate-500 text-sm'>
            * Note: All Carlingwood Badminton Club Members and guests must be 18 years of age or
            older
          </p>
        </div>
      </div>
    </Section>
  );
}
