import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivat from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import CreateResume from "./pages/CreateResume";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/resumes"
          element={
            <IsPrivat>
              <UserPage />
            </IsPrivat>
          }
        ></Route>
        <Route
          path="/create-resume"
          element={
            <IsPrivat>
              <CreateResume />
            </IsPrivat>
          }
        />
        {/* <Route
          path="/projects/edit/:projectId"
          element={
            <IsPrivat>
              <EditProjectPage />
            </IsPrivat>
          }
        /> */}
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
