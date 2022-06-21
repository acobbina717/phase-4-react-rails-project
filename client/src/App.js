import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Route path="/landing-page"></Route>
      <LandingPage />
      <Route path="/entry-page"></Route>
      <Route path="/teacher-home-page"></Route>
      <Route path="/student-home-page"></Route>
    </div>
  );
}

export default App;
