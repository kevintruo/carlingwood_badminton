import Section from "../../components/Section";

export default function Regulations() {
  return (
    <Section>
      <div className='flex flex-row w-screen justify-between p-5'>
        <div className='flex flex-col'>
          <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>
            Club Regulations
          </p>
          <p>PLAYER CODE OF CONDUCT</p>
          <p>
            The Carlingwood Badminton Club will operate within a positive atmosphere of respect,
            fair play and good sportsmanship. Regular board selection play will be offered to permit
            challenging games at appropriate levels for all members, at the same time as providing
            an opportunity for social play among all members
          </p>
          <ul>
            <li>
              Respect the court time allowed for games. Leave your court promptly for rotation
            </li>
            <li>
              Be aware and respectful tog ames and players that are on other courts. For example:
              players leaving or entering the court should od so as quickly and with as little
              disruption as possible to the games that are in progress. Whenever possible, wait
              until action on the courts that you have pass has stopped, or make your way to or from
              the court through the hallway rather than through the gym
            </li>
            <li>Zero tolerance for loud, abusive or profane language.</li>
            <li>Zero tolerance for racquet throwing or indiscriminately hitting the shuttle.</li>
            <li>
              Zero tolerance for harassment of any form, including but not limited to physical or
              psychological abuse
            </li>
            <li>
              Keep positive whether you win or lose, whether you are having a good day or not.
            </li>
            <li>
              <ul>
                Develop a consistent habit of good sportsmanship and fair play, for example:
                <li>Keep the score correctly B state the score clearly after each rally</li>
                <li>
                  Call the lines fairly (remember it is the lines on your own side of the net for
                  which you are responsible)
                </li>
                <li>Shake hands after each match</li>
                <li>Congratulate your opponent politely if you lose</li>
                <li>
                  Acknowledge a strength, good shot, or good rally of your opponent when you win.
                </li>
                <li>Accept congratulations graciously from your opponent.</li>
              </ul>
            </li>
            <li>
              Proper badminton attire required, example, indoor court shoes, shorts, and t-shirt.
            </li>
            <li>Chewing gum, candy not allowed while on court</li>
            <li>Protective glasses strongly recommended</li>
            <li>
              Guests will be limited to allow maximum play time for members. Guest fees are $5.00
              per session.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
