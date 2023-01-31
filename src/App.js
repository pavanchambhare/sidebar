import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
   
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />}  /> 
        <Route path="/home" element={<Home />}  /> 
        <Route path="/about" element={<About />}  /> 
        <Route path="/contact" element={<Contact />}  /> 
        <Route path="/services" element={<Services />}  /> 
      </Routes>
      </Sidebar>
    </Router>

  )
}

export default App;
