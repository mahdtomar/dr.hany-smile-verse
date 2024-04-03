import { atom } from "recoil"
const routesSer=atom({
    key:"routesSer",
    default:[
        {
            id: 0,
            route:"/admin/services/alignmentTeeth"
          }, {
            id: 1,
            route:"/admin/services/rootCanal"
          }, {
            id: 2,
            route:"/admin/services/cosmeticTeeth"
          }, {
            id: 3,
            route:"/admin/services/OralHygiene"
          },
        ]
})
export default routesSer