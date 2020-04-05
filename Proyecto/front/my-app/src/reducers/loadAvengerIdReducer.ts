import { actionsDef } from '../actions/actionsDef';
import IAvenger from '../model/iavengers';

const emptyAvenger:IAvenger={
    id:'',    
    name:'',
    description:'',
    image:''    
    }

export const loadAvengerIdReducer = (state: IAvenger = emptyAvenger, action: any) => {
    switch (action.type) {
        case actionsDef.avenger.LOAD_ID_AVENGER:
            return handleloadAvengerIdCompleted(state, action.payload);
    }
    return state;
};

const handleloadAvengerIdCompleted = (state: IAvenger, payload: IAvenger) => {
    return payload;
};