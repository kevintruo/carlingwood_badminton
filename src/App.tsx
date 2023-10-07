import Main from "./Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Regulations from "./pages/Regulations";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path='regulations' element={<Regulations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
