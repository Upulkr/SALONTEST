
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Booking from './pages/Booking';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
