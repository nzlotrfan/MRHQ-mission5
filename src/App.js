import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import Quotes from "./pages/Quotes";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
