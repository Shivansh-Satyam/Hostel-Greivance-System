import "./styles/layout.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import ViewComplaints from "./components/ViewComplaints";
import StudentAnnouncements from "./components/StudentAnnouncements";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/view-complaints" element={<ViewComplaints />} />
          <Route path="/updates" element={<StudentAnnouncements />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;