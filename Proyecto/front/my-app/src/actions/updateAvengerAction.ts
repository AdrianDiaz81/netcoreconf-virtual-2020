import { avengerAPI } from "../api";
import { actionsDef } from "../actions/actionsDef";
import IAvenger from "../model/iavengers";
export const updateAvengerAction = (avenger:IAvenger) => (dispatch: any) => {
    avengerAPI.updateAvengersAsync(avenger).then((result:any) => {
       window.history.back();
        dispatch(updateAvengersCompleted(result));
    })
    const updateAvengersCompleted = (result: boolean) => ({
        type: actionsDef.avenger.UPDATE_AVENGER,
        payload: result,
        meta: {
            httpEnd: true
        }        
    });
}