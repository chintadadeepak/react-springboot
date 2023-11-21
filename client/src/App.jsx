import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HireTalent from "./pages/HireTalent";
import NeedTalent from "./pages/NeedTalent";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire-talent" element={<HireTalent />} />
          <Route path="/need-talent" element={<NeedTalent />} />
          <Route path="*" element={<h3>404, Page Not Found</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
