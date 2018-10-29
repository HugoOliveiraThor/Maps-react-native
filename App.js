import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    latitude: -15.815146,
    longitude: -48.014597 
  }

  componentDidMount() {
    setTimeout(() => {
      this.mapView.animateToCoordinate({
        latitude: -15.805146,
        longitude: -48.012597
      }, 1000)
    }, 3000)

  }

  render() {
    const {latitude, longitude} = this.state
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map} 
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnable={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
        >
        <MapView.Marker
           coordinate={{
            latitude: -15.815146,
            longitude: -48.014597  
          }}
        />
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          >
          <View style={styles.place}></View>
          <View style={styles.place}></View>  
        </ScrollView>
      </View>
      
    );
  }
}

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex:1 , 
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  mapView: {
    position: 'absolute', 
    top: 0 , 
    left: 0 ,
    bottom: 0,
    right: 0
  },
  placesContainer: {
    width: '100%',
    maxHeight: 200
  },
  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20
  }
});
