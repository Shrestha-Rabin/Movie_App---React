import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import "./css/App.css";

function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="main-container">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App