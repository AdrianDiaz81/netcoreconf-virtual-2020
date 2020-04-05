import { actionsDef } from '../actions/actionsDef';
import IAvenger from '../model/iavengers';

export const loadAvengerReducer = (state: IAvenger[] = [], action: any) => {
    switch (action.type) {
        case actionsDef.avenger.LOAD_AVENGER:
            return handleloadAvengerCompleted(state, action.payload);
    }
    return state;
};

const handleloadAvengerCompleted = (state: IAvenger[], payload: IAvenger[]) => {
    return payload;
};