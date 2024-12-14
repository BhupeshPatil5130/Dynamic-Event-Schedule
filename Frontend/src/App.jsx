import { Route, Routes } from "react-router-dom";



import About from "./pages/About";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";
import Add from "./pages/Add";
function App() {
 
  return (
    <div>
     
      <div>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/personal-activity" element={<Personal />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/add-event" element={<Add />} />
          
        </Routes>

       
      </div>
    </div>
  );
}

export default App;
