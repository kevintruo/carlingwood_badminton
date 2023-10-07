import Section from "../../components/Section";

export default function Fees() {
  return (
    <Section>
      <div className='flex flex-row w-screen justify-between p-5'>
        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>Fees</p>
          <div className='flex gap-1'>
            <p>The Early Registration for next season is currently:</p>
            <p className='font-bold'>Open</p>
          </div>
          <p className='text-red-500'>
            NOTE: In order to have taken advantage of the early registration fee, the payment must
            have been received by May 31st, of the current year
          </p>
          <p>
            New applicants, interested to join, please submit your name to our waiting list. for
            this season's membership, in the event that membership spaces open up.
          </p>
          <p className='text-xl'>Registration Site</p>
          <p>
            All previous year members who apply before the season start date have priority placing
            on the membership list, any new members will be placed in the order they contacted the
            club. All others will be placed on a waiting list and contacted if any spots open up.
          </p>
          <p className='text-xl'>EARLY-BIRD SPECIAL</p>
          <div className='flex gap-1'>
            <p className='font-bold'>$100</p>
            <p>Available for Returning full members only. Payment must be received by May 31st</p>
          </div>
          <p className='text-xl'>FULL SEASON</p>
          <div className='flex gap-1'>
            <p className='font-bold'>$140</p>
            <p>(September to May)</p>
          </div>
          <p className='text-xl'>GUEST PLAY</p>
          <div className='flex gap-1'>
            <p className='font-bold'>$5</p>
            <p>Guests MUST contact the club before coming out to ensure available spots.</p>
          </div>
          <p>Fees are payable in form of cheque via mail, e-transfer or in person.</p>
        </div>
      </div>
    </Section>
  );
}
