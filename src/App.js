import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addnote from "./pages/Addnote";
import LaptopList from "./pages/LaptopList";
import SingleLaptop from "./pages/SingleLaptop";

function App() {

  return (
    <Routes>
      <Route path="/redberry-form/" element={<Home />} />
      <Route path="/addnote" element={<Addnote />} />
      <Route
        path="/laptoplist"
        element={<LaptopList  />}
      />
      <Route path="/laptoplist/:id" element={<SingleLaptop />} />
    </Routes>
  );
}

export default App;
