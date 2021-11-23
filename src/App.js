import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Quotes from "./pages/Quotes";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
