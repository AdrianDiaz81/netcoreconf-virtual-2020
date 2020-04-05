import { connect } from "react-redux";
import { StateReducer } from "../../reducers";
import { loadIdAvengerAction } from '../../actions/loadIdAvengerAction';
import { EditAvenger } from './editAvenger';
import { updateAvengerAction } from '../../actions/updateAvengerAction';
import IAvenger from '../../model/iavengers';

const mapStateToProps = (state: StateReducer) => ({
    avenger: state.avenger
});

const mapDispatchToProps = (dispatch: any) => ({
    loadIdAvenger: (id:string) => dispatch(loadIdAvengerAction(id)),
    editAvenger:(avenger:IAvenger)=>dispatch(updateAvengerAction(avenger)),
});

export const EditAvengerContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditAvenger);