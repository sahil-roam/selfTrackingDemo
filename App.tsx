/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Roam from 'roam-reactnative';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const requestPermission = () => {
    Roam.requestLocationPermission()
  }

  const requestBackgroundLocationPermission = () => {
    Roam.requestBackgroundLocationPermission()
  }

  const startTracking = () => {

    if(Platform.OS === 'android'){
      Roam.startTracking(Roam.TrackingMode.ACTIVE)
      //Roam.startTracking(Roam.TrackingMode.BALANCED)
      //Roam.startTracking(Roam.TrackingMode.PASSIVE)
      //Roam.startSelfTrackingDistanceInterval(5, 20, 50)
      //Roam.startSelfTrackingTimeInterval(5, 50)
    } else {
      Roam.startTracking(Roam.TrackingMode.ACTIVE)
      //Roam.startTracking(Roam.TrackingMode.BALANCED)
      //Roam.startTracking(Roam.TrackingMode.PASSIVE)
      // Roam.startTrackingCustom(
      //   true,
      //   false,
      //   Roam.ActivityType.FITNESS,
      //   Roam.DesiredAccuracyIOS.BEST,
      //   true,
      //   5,
      //   50,
      //   5
      //   )
    }


  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
      <TouchableHighlight 
      style={styles.button1}
      onPress={() => {requestPermission()}}
      >
        <Text>Location Permission</Text>
      </TouchableHighlight>

      {
        Platform.OS === 'android'
        ?
        <TouchableHighlight 
      style={styles.button1}
      onPress={() => {requestBackgroundLocationPermission()}}
      >
        <Text>Background Location Permission</Text>
      </TouchableHighlight>
      : <View></View>
      }

      
      <TouchableHighlight 
      style={styles.button1}
      onPress={() => {startTracking()}}
      >
        <Text>Start Tracking</Text>
      </TouchableHighlight>

      <TouchableHighlight 
      style={styles.button1}
      onPress={() => {Roam.stopTracking()}}
      >
        <Text>Stop Tracking</Text>
      </TouchableHighlight>

     
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    color: 'blue',
    alignSelf: 'center'
  }
  
});

export default App;
