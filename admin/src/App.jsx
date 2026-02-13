import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ContactMessages from "./components/contactMessages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Dedicated Messages Page */}
        <Route path="/contactmessages" element={<ContactMessages />} />
      </Routes>
    </Router>
  );
}

export default App;