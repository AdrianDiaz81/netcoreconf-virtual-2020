import { connect } from "react-redux";
import { StateReducer } from "../../reducers";
import { loadAvengerAction } from '../../actions/loadAvengerAction';
import {ListAvenger}  from './listAvenger';

const mapStateToProps = (state: StateReducer) => ({
    avengerCollection: state.avengerCollection,
});

const mapDispatchToProps = (dispatch: any) => ({
    loadAvenger: () => dispatch(loadAvengerAction())
});

export const ListAvengerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListAvenger);