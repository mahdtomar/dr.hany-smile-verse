import { Route, Routes, Navigate } from "react-router-dom";
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
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UnAuthorized from "./routes/UnAuthorized";
import SignupForm from "./components/login/SignupForm";
import LoginForm from "./components/login/loginForm";
import AlignmentTeeth from "./components/services-page/AlignmentTeeth";
import Faq from "./pages/Faq";
import RootCanel from "./components/services-page/RootCanel";
import CosmeticTeeth from "./components/services-page/CosmeticTeeth";
import OralHygiene from "./components/services-page/OralHygiene";
import LiveAdvisory from "./components/services-page/LiveAdvisory";
import BodyDash from "./components/admin/dashboard/components/BodyDash";
import Patient from "./components/admin/dashboard/components/Patient";
import Settings from "./components/admin/dashboard/components/settings/Settings";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import ServicesDash from "./components/admin/dashboard/components/services/ServicesDash";
import ListCosmetic from "./components/admin/dashboard/components/services/components/service/ListCosmetic";
import ListRoot from "./components/admin/dashboard/components/services/components/service/ListRoot"
import ListAlign from "./components/admin/dashboard/components/services/components/service/ListAlign"
import ListOral from "./components/admin/dashboard/components/services/components/service/ListOral";
// import AlignmentTeethController from "./components/admin/dashboard/components/service/AlignmentTeethController";
// import RootCanalController from "./components/admin/dashboard/components/service/RootCanalController";
// import OralHygieneController from "./components/admin/dashboard/components/service/OralHygieneController";
// import CosmeticTeethController from "./components/admin/dashboard/components/service/CosmeticTeethController";
// ionic

function App() {
  const { currentuser } = useContext(AuthContext);
  console.log(currentuser);
  const api = process.env.POSTMAN_QUERY;
  console.log(api)
  const Protectedroute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/signup" />;
    }
    return children;
  };
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Logo />} path="/logo" />
        <Route element={<Services />} path="/services" />
        <Route element={<AlignmentTeeth />} path="/services/Alignment-teeth" />
        <Route element={<RootCanel />} path="/services/root-canal"></Route>
        <Route
          element={<CosmeticTeeth />}
          path="/services/cosmetic-teeth"
        ></Route>
        <Route element={<OralHygiene />} path="/services/oral-hygiene"></Route>
        <Route
          element={<LiveAdvisory />}
          path="/services/live-advisory"
        ></Route>
        <Route element={<ProtectedRoutes allowedRoles={[1, 2, 3]} />}>
          <Route
            element={<BookingAppointment content={<PatientType />} />}
            path="/Appointment"
          />
        </Route>
        <Route
          element={<BookingAppointment content={<NewPatient />} />}
          path="/Appointment/New"
        />
        <Route element={<UserProfile content={"info"} />} path="/profile" />
        <Route
          element={<ConfortAndTechnology />}
          path="/comfort-and-technology"
        />
        <Route
          element={<UserProfile content={"insurance"} />}
          path="/profile/insurance"
        />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<LoginPage child={<LoginForm />} />} path="/login" />
        <Route element={<LoginPage child={<SignupForm />} />} path="/signup" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<BodyDash />} path="/admin/appointment"></Route>
        <Route element={<Patient />} path="/admin/patient"></Route>
        <Route element={<Settings />} path="/admin/settings"></Route>
        <Route element={<ServicesDash />} path="/admin/services"></Route>
        <Route
          element={<ListCosmetic />}
          path="/admin/services/cosmeticTeeth"
        ></Route>
        <Route element={<UnAuthorized />} path="/unAuthorized" />
        <Route element={<Faq />} path="/faq"></Route>
        <Route
          element={<ListAlign/>}
          path="/admin/services/alignmentTeeth"
        />
        <Route
          element={<ListRoot />}
          path="/admin/services/rootCanal"
        />
        <Route
          element={<ListOral/>}
          path="/admin/services/OralHygiene"
        />
        {/* <Route
          element={<CosmeticTeethController />}
          path="/admin/services/cosmeticTeeth"
        /> */}
      </Routes>
    </div>
  );
}

export default App;
