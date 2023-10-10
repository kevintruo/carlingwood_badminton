import Section from "../../components/Section";

export default function Contact() {
  return (
    <Section id='contact_us' className='gap-2'>
      <p className='text-3xl font-bold underline text-black  dark:text-white dark:bg-black'>
        Contact Us
      </p>
      <p className='text-lg font-semibold text-black  dark:text-white dark:bg-black'>
        CBC EXECUTIVE COMMITTEE MEMBERS:
      </p>
      <p>PRESIDENT</p>
      <p className='underline'>Denis Lu</p>
      <p>VICE-PRESIDENT</p>
      <p className='underline'>Mihai Varlan</p>
      <p>TREASURER</p>
      <p className='underline'>Mihai Varlan</p>
      <p>WEBMASTER</p>
      <p className='underline'>Cris Baets & Kevin Truong</p>
      <p className='text-lg font-semibold text-black  dark:text-white dark:bg-black'>
        CLUB OFFICERS:
      </p>
      <p>
        The following members are available evenings to help collect guest fees and enforce the
        rules and regulations of the Carlingwood badminton club. Please defer to their requests
        should they speak with you. If you have questions about club rules or regulations feel free
        to email the Executive team
      </p>
      <p className='underline'>Tristan Higham</p>
      <p className='underline'>William Ha</p>
      <p className='underline'>Reg Higham</p>
    </Section>
  );
}
