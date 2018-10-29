import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Casa do café',
        description: 'Café quentinho...',
        latitude: -15.815146,
        longitude: -48.014597,
      },
      {
        id: 2,
        title: 'RocketSeat',
        description: 'Programação,empreendorismo,mindset',
        latitude: -15.811810,
        longitude: -48.023749
      },
      {
        id: 3,
        title: 'Joseph House',
        description: 'Joseph , are you at home ?',
        latitude: -15.810592, 
        longitude: -48.021989
      }
    ] 
  }

  render() {
    const {latitude, longitude} = this.state.places[0]
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map} 
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnable={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
        >
        { this.state.places.map(place =>(
          <MapView.Marker
           key={place.id}
           coordinate={{
            latitude: place.latitude,
            longitude: place.longitude  
          }}
        />
        ) )}
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
