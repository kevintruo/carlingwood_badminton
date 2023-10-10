import Announcement from "./pages/Announcement";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Fees from "./pages/Fees";
import LandingPage from "./pages/LandingPage";
import Membership from "./pages/Membership";
import Registration from "./pages/Registration";

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
