import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivat from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import UserPage from "./pages/UserPage";
import DetailResumePage from "./pages/DetailResumePage";
import Navbar from "./components/Navigation/Navbar";
import ShowPage from "./pages/ShowPage";
import Showpage2 from "./pages/Showpage2";

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
          path="/resume/:resumeId"
          element={
            <IsPrivat>
              <DetailResumePage />
            </IsPrivat>
          }
        />
        <Route
          path="/resume/show/:resumeId"
          element={
            <IsPrivat>
              <ShowPage />
            </IsPrivat>
          }
        />
        <Route
          path="/resume/show-look2/:resumeId"
          element={
            <IsPrivat>
              <Showpage2 />
            </IsPrivat>
          }
        />
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
