import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { setAuthHeader } from "../services/network";

function App() {
  if (localStorage.getItem("usertoken")) {
    setAuthHeader();
  }
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes basename="/">
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
