import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./components/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivat from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<IsPrivat><ProjectListPage /></IsPrivat>}></Route>
        <Route path="/projects/:projectId" element={<IsPrivat><ProjectDetailsPage /></IsPrivat>} />
        <Route path="/projects/edit/:projectId" element={<IsPrivat><EditProjectPage /></IsPrivat>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
