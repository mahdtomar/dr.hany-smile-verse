import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import './sass/Rootcanal.css'
import Callus from "./Callus";
import ServicesSideBar from "./ServicesSideBar";
import HeaderRoot from "./components/root-canal/components/HeaderRoot";
import RequiredRoot from "./components/root-canal/components/RequiredRoot";
import ProcedureRoot from "./components/root-canal/components/ProcedureRoot";
function RootCanel() {
  return (
    <div>
      <Navbar />
      <div className="container">

        <div style={{ margin: "50px auto" }} className="container root-canal-component">
          <ServiceHeader servicename={"Root Canal"} />
          <ServicesSideBar />
          <main>
            
            <HeaderRoot/>
      <RequiredRoot/>
           <ProcedureRoot/>
          </main>
        </div>
      </div>
      <Callus />
      <Footer />
    </div>
  );
}
export default RootCanel;
