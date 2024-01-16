import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import BookingAppointment from "./pages/BookingAppointment";
import PatientType from "./components/appointment/PatientType";
import NewPatient from "./components/appointment/NewPatient";
import UserProfile from "./pages/UserProfile";
import AboutUs from "./pages/AboutUs";
import ConfortAndTechnology from "./pages/ConfortAndTechnology";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Logo />} path="/logo" />
        <Route element={<Services />} path="/services" />
        <Route
          element={<BookingAppointment content={<PatientType />} />}
          path="/Appointment"
        />
        <Route
          element={<BookingAppointment content={<NewPatient />} />}
          path="/Appointment/New"
        />
        <Route
          element={<UserProfile content={"info"} />}
          path="/profile/:id/info"
        />
        <Route
          element={<ConfortAndTechnology />}
          path="/comfort-and-technology"
        />
        <Route
          element={<UserProfile content={"insurance"} />}
          path="/Profile/:id/insurance"
        />
        <Route element={<AboutUs />} path="/about-us" />
      </Routes>
    </div>
  );
}

export default App;
