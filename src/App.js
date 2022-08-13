import Navbar from "./components/Navbar";
import Edit from "./components/page/Edit";
import { Routes, Route } from "react-router-dom";
import Showbooks from "./components/page/Showbooks";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/edit" element={<Edit />} />
        <Route path="/" element={<Showbooks />} />
      </Routes>
    </div>
  );
}

export default App;
