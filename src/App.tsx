import Main from "./Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Regulations from "./pages/Regulations";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route index element={<Main />} />
          <Route path='regulations' element={<Regulations />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}
