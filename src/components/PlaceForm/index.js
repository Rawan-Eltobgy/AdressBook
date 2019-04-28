import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { placeCreate } from '../../actions/PlacesActions';
import '../../styles/__form.scss';

const Form = t.form.Form;

//All fields are required, place phone number is optional, coordinates from map
const Place = t.struct({
    placeType: t.String,
    placeName: t.String,
    phoneNumber: t.maybe(t.String)
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
            color: 'blue',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        // the style applied when a validation error occours
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    }
}

const options = {
    fields: {
        email: {
            error: 'Without an email address how are you going to reset your password when you forget it?'
        },
        password: {
            error: 'Choose something you use on a dozen other sites or something you won\'t remember'
        },
        terms: {
            label: 'Agree to Terms',
        },
    },
   stylesheet: formStyles,
};

class PlaceForm extends Component {
    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        const {
            placeName,
            placeType,
            phoneNumber
         } = value;

    }

    render() {
        return (
        <View className="container">
            <Form ref = {c => this._form = c}
            type = {Place}
            options = {options}/>
            <Button title = "Save"
            onPress = {this.handleSubmit}
            />
        </View>
        );
    }
}

//to add the coordinates
const mapStateToProps = (state) => {
    const {
        placeName,
        placeType,
        phoneNumber
    } = state.placeSaveForm;

    return {
        placeName,
        placeType,
        phoneNumber
    };
};
export default connnect (mapStateToProps, { placeCreate })(PlaceForm);
// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         marginTop: 50,
//         padding: 20,
//         backgroundColor: '#ffffff',
//     },
// });
