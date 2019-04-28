import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PLACE_CREATE,
    PLACES_FETCH_SUCCES
} from './types';

export const placeCreate = ({
        placeName,
        placeType,
        phoneNumber
    }) => {
        console.log( placeName );
        //dispatching an action to reset the adding place form values in reducer
        return (dispatch) => {
              firebase.database().ref('/places').push({
                  placeName,
                  placeType,
                  phoneNumber
              })
              .then(() => {
                  dispatch({ type: PLACE_CREATE})
                  Actions.mapView ({ type: 'reset' })});
        }
};

//to fetch places from firebase
//snapshot is an object to get a handle on the employees
export const placesFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/places')
        .on('value', snapshot => {
            dispatch({ type: PLACES_FETCH_SUCCESS , payload: snapshot.val() });
        });
    };
};
