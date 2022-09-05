import Nav from "./Components/Navbar/Nav";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./Pages/Player/Players";
import AgentSelect from "./Pages/SelectAgent/AgentSelect";
import Random from "./Pages/Random/Random";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Players" element={<Players/>} />
        <Route path="/AgentSelect" element={<AgentSelect/>} />
        <Route path="/Random" element={<Random/>} />
      </Routes>
    </Router>
  );
}

export default App;
