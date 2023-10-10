import Announcement from "../Announcement";
import Contact from "../Contact";
import Facilities from "../Facilities";
import Fees from "../Fees";
import LandingPage from "../LandingPage";
import Membership from "../Membership";
import Registration from "../Registration";

export default function Main() {
  return (
    <>
      <LandingPage />
      <Announcement />
      <Membership />
      <Facilities />
      <Fees />
      <Contact />
      <Registration />
    </>
  );
}
