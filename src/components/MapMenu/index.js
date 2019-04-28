import React, { Component } from  'react';
import { StyleSheet, Button } from  'react-native';
import MapView from  'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { placesFetch } from '../actions';

 class MapMenu extends Component {
     componentDidMount(){
        this.props.placesFetch();
     }
    render() {
        return (
        <View>
        <MapView style = {styles.map}
            initialRegion = {{
                latitude: 13.139238380834923,
                longitude: 80.25188422300266,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}/>

            <Button title = "Add Place"
            onPress = {this.handleSubmit}
            // Actions.placeSaveForm()
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        height: 100,
        flex: 1
        }
});

export default connect(null, { placesFetch })(MapMenu);
