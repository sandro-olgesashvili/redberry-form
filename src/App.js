import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addnote from "./pages/Addnote";
import LaptopList from "./pages/LaptopList";
function App() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/addnote" element={<Addnote />} />
        <Route path="/laptoplist" element={<LaptopList />} />
    </Routes>
  );
}

export default App;
