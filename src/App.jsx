import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Public/Public";
import SharedLayout from "./components/SharedLayout";
import ClientDashboard from "./pages/Client/ClientDashboard";
import WorkerDashboard from "./pages/Worker/WorkerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PageNotFound from "./components/PageNotFound";
import Register from "./pages/Public/Register";
import Login from "./pages/Public/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<ClientDashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="worker" element={<WorkerDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
