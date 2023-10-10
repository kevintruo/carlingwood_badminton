import Section from "../../components/Section";
import { Link as RouterLink } from "react-router-dom";

export default function Membership() {
  return (
    <Section id='membership' className='gap-2'>
      <p className='text-3xl font-bold underline text-black  dark:text-white dark:bg-black'>
        Membership
      </p>
      <p>
        CLUB REGULATIONS{" "}
        <RouterLink to='/regulations' className='underline'>
          (READ)
        </RouterLink>
      </p>
      <p className='indent-5'>
        A maximum of 75 Club Members will comprise the total membership for the Carlingwood
        Badminton Club. Once the maximum membership has been reached, the membership of the Club
        will be considered closed.{" "}
      </p>
      <p className='indent-5'>
        Members from previous years can sign up using our{" "}
        <a href='#1' className='underline text-blue-500'>
          Registration Site
        </a>
        . New applicants that are interested to join MUST submit their name to our{" "}
        <a href='#1' className='underline text-blue-500'>
          waiting list
        </a>
        . You will in the event that membership spaces open up.
      </p>
      <p className='indent-5'>
        Only members that complete the online registration form and pay in full will be considered
        for a membership at the Club.
      </p>
      <p className='indent-5'>
        Each membership form must contain a valid e-mail address as all notifications regarding the
        Club and its activities are done through e-mail.
      </p>
      <p className='text-xl font-bold text-black  dark:text-white dark:bg-black'>Guests</p>
      <p>
        Guest play is possible but depends on member turnout. The forms will be enabled or disabled
        as play levels fluctuate. Before coming, please click here to fill out the form{" "}
        <a
          href='#guest_registration'
          className='underline text-blue-500'
          onClick={(e) => {
            let section = document.getElementById("registration");
            e.preventDefault();
            section && section.scrollIntoView({ behavior: "smooth", block: "center" });
          }}>
          here
        </a>
        .
      </p>
    </Section>
  );
}
