import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import BackButton from "./Components/BackButton";

function App() {
  const [error, setError] = useState(null);
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  const getCourses = () => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  };

  const authUser = () => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentUser(data);
        });
      }
    });
  };

  useEffect(() => {
    getCourses();
    authUser();
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        history.push("/");
      }
    });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/login">
          <LoginPage authUser={authUser} history={history} />
        </Route>

        <Route exact path="/signup">
          <SignUpPage authUser={authUser} history={history} />
        </Route>

        <Route exact path="/home">
          {currentUser ? (
            <Home
              courses={courses}
              handleLogout={handleLogout}
              currentUser={currentUser}
            />
          ) : (
            <div>
              <BackButton history={history} />
              <h1>Must Be Logged In To View This Page</h1>
            </div>
          )}
        </Route>
        <Route exact path="/profile">
          <Profile handleLogout={handleLogout} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
