/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const startListener = () => {
    Roam.startListener('location', locations => {
        console.log(JSON.stringify(locations))
    })
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RoamHeadlessService', startListener())

