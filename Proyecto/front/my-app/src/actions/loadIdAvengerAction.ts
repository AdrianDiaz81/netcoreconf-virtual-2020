import { avengerAPI } from "../api";
import { actionsDef } from "./actionsDef";
import IAvenger from "../model/iavengers";
export const loadIdAvengerAction = (id:string) => (dispatch: any) => {
    avengerAPI.getAvengersIdAsync(id).then((result:any) => {
        dispatch(loadIdAvengerCompleted(result));
    })
    const loadIdAvengerCompleted = (result: IAvenger) => ({
        type: actionsDef.avenger.LOAD_ID_AVENGER,
        payload: result,
        meta: {
            httpEnd: true
        }        
    });
}