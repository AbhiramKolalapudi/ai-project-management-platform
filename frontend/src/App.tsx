import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>}/>
      <Route path="/projects/:projectId" element={<ProtectedRoute> <ProjectPage /> </ProtectedRoute>}/>
    </Routes>
  );
}

export default App;