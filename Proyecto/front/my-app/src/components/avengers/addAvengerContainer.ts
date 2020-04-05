import { connect } from 'react-redux';
import { StateReducer } from '../../reducers';
import IAvenger from '../../model/iavengers';
import { addAvengerAction } from '../../actions/addAvengersAction';
import { AddAvenger } from './addAvenger';

const mapStateToProps = (state: StateReducer) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    addAvenger: (avenger:IAvenger) => dispatch(addAvengerAction(avenger))
});

export const AddAvengerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAvenger);