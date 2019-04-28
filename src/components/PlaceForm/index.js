import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight, Picker} from 'react-native';
import { connect } from 'react-redux';
import { placeCreate } from '../../actions/PlacesActions';

class PlaceForm extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
  }

  onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      placeName: {minlength:4,  required: true},
      placeType: {required: true},
      phoneNumber: {
          numbers: true,
          required: true
      }
    });
  const {
      placeName,
      placeType,
      phoneNumber
  } = this.props;

  this.props.placeCreate({
      placeName,
      placeType,
      phoneNumber
  });
  }

  render() {
      return (
        <View>
          <TextInput ref="placeName" value={this.props.placeName} onChangeText={(value) => this.props.placeUpdate({prop: 'placeName', value})}/>
          <TextInput ref="phoneNumber" value={this.props.placeNumber} onChangeText={(value) => this.props.placeUpdate({prop: 'placeNumber', value})} />
          <Picker
            ref = "placeType"
            value={this.props.placeType}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
            {(value) => this.props.placeUpdate({prop: 'placeType', value})}
            }>
            <Picker.Item label="Restaurant" value="restaurant" />
            <Picker.Item label="Home" value="home" />
            <Picker.Item label="Park" value="park" />
        </Picker>

          <TouchableHighlight onPress={this.onPressButton}>
            <Text>Save</Text>
          </TouchableHighlight>

          <Text>
            {this.getErrorMessages()}
          </Text>
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
export default connect(mapStateToProps, {
    placeCreate
})(PlaceForm);
