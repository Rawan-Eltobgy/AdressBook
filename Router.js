import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Form from './src/components/Form';
import MapMenu from './src/components/MapMenu';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="mapView" component={MapMenu} title="Map" initial/>
            <Scene key="placeSaveForm" component={Form} title="Add a place" />

        </Router>
    );
};


export default RouterComponent;
