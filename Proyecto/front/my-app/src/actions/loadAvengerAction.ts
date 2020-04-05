import { avengerAPI } from "../api";
import { actionsDef } from "./actionsDef";
import IAvenger from "../model/iavengers";
export const loadAvengerAction = () => (dispatch: any) => {
    avengerAPI.getAvengersAsync().then((result:any) => {
        dispatch(loadAvengerCompleted(result));
    })
    const loadAvengerCompleted = (result: IAvenger[]) => ({
        type: actionsDef.avenger.LOAD_AVENGER,
        payload: result,
        meta: {
            httpEnd: true
        }        
    });
}