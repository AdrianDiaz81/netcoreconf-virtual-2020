import { combineReducers } from "redux";
import { httpReducer, HttpState } from './http';
import  IAvenger from '../model/iavengers';
import { loadAvengerReducer} from './loadAvengerReducer';
import {loadAvengerIdReducer} from './loadAvengerIdReducer';

export interface StateReducer {
    http: HttpState;
    avengerCollection: IAvenger[],
    avenger:IAvenger
};

export const state = combineReducers<StateReducer>({
    http: httpReducer,
    avengerCollection: loadAvengerReducer,    
    avenger:loadAvengerIdReducer
});