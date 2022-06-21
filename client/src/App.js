import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/student-entry-page"></Route>
      <Route path="/teacher-entry-page"></Route>
      <Route path="/teacher-home-page"></Route>
      <Route path="/student-home-page"></Route>
    </div>
  );
}

export default App;
