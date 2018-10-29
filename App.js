import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import MapView from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler';


const {height, width} = Dimensions.get('window')

export default class App extends React.Component {
  state = {
    places: [
      {
        id: 1,
        title: 'House of coffee',
        description: ' Hot coffee',
        latitude: -15.815146,
        longitude: -48.014597
      },
      {
        id: 2,
        title: 'Hugos Thinking',
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
           ref={mark => place.mark = mark} // Now each places have the reference to the mark
           title={place.title}
           description={place.description}
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
          onMomentumScrollEnd= {e => { // With this we can know exactly how many scroll was given
            const place = (e.nativeEvent.contentOffset.x > 0)
              ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              : 0;
            
            const { latitude , longitude, mark } = this.state.places[place.toFixed(0)]

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 500)
            
            setTimeout(() => {
              mark.showCallout()
            }, 500)
          }} 
          >
          {this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
            <Text style={styles.title}>{ place.title }</Text>
            <Text style={styles.description}>{ place.description }</Text>
          </View>
          ))}
            
        </ScrollView>
      </View>
      
    );
  }
}


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
