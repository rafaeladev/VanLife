import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
