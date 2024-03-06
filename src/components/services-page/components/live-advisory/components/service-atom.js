import { atom } from "recoil";
import { services } from "../../../../../Data";
export const service = atom({
    key:"services",
    default :{
        services:services
    }
    }
    )