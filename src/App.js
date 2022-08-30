import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Addnote from "./pages/Addnote";
function App() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/addnote" element={<Addnote />} />
    </Routes>
  );
}

export default App;
