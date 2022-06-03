import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBarList from "./config/NavbarList";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <NavBarList>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<> 404 Not Found</>} />
        </Routes>
      </NavBarList>
    </Router>
  );
}

export default App;
