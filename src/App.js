import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
