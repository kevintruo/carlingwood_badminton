import Navbar from "./components/Navbar";
import About from "./pages/About";
import Announcement from "./pages/Announcement";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Fees from "./pages/Fees";
import LandingPage from "./pages/LandingPage";
import Membership from "./pages/Membership";
import Registration from "./pages/Registration";
import Regulations from "./pages/Regulations";

function App() {
  return (
    <div
      className='snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden styled-scrollbar styled-scrollbar-track styled-scrollbar-thumb dark:styled-scrollbar-dark dark:styled-scrollbar-track-dark'
      id='styled-scrollbar'>
      <Navbar />
      <LandingPage />
      <Announcement />
      <About />
      <Membership />
      <Regulations />
      <Facilities />
      <Fees />
      <Contact />
      <Registration />
    </div>
  );
}

export default App;
