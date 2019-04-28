import { PLACE_CREATE } from '../actions/types';

const INITIAL_STATE = {
    placeName:'',
    placeType:'Restaurant',
    phoneNumber:''
};

export default ( state= INITIAL_STATE, action) => {
    switch (action.type) {
        //When dispatching a create action we want to  reset things in reducer
        case PLACE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}
