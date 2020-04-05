import { avengerAPI } from "../api";
import { actionsDef } from "./actionsDef";
import IAvenger from "../model/iavengers";

export const addAvengerAction = (avenger:IAvenger) => (dispatch: any) => {
    avengerAPI.addAvengersAsync(avenger).then((result:any) => {
       window.history.back();
        dispatch(loadAvengerCompleted(result));
    })

    const loadAvengerCompleted = (result: boolean) => ({
        type: actionsDef.avenger.ADD_AVENGER,
        payload: result,
        meta: {
            httpEnd: true
        }        
    });
}