import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { User } from "./components/User/User";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
