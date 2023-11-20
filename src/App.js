import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import NavLink from "./components/NavLink";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Logo />} path="/logo" />
        <Route element={<NavLink />} path="/services" />
      </Routes>
    </div>
  );
}

export default App;
