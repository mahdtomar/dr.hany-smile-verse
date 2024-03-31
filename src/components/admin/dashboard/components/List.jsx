import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import "./list.css";
import { service } from "../../../services-page/components/live-advisory/components/service-atom";
import routesSer from "./Routes-ser_dash";

function List() {
    const [ser] = useRecoilState(service);
    const [routes] = useRecoilState(routesSer)
    const servicesWithoutLast = ser.services.slice(0, -1); // Remove the last element
    console.log(servicesWithoutLast)
    return (
        <ul className="list-body">
            <div className="content">
                {servicesWithoutLast.map((e) =>
                    <li className="list-child d-flex" key={e.id}>
                        <div key={e.id} style={{flex: "5",
    textAlign: "start"}}>{e.Name}</div>
                        <div className="btns d-flex" style={{flex:"0.5",flexDirection:"row"}}>
                        <button key={e.id} className="edit">
                            <Link to={e.dash_link}>
                                Edit
                            </Link></button>
                        {/* <button className="del">Delete</button> */}
                    </div>
                    </li>
                )}
            </div>
           
        </ul>
    );
}

export default List;
