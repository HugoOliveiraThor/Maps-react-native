# Simple example how to use Maps in react-native
## We are going to use the react-native-maps created by Airbnb
[Link of repository of react-native-maps](https://github.com/react-community/react-native-maps)

#### I use in this example the expo to work with the app 
[Link to install and config expo with react-native](https://facebook.github.io/react-native/docs/getting-started.html)
##### I will show an example how to install expo , remember this can change in the future :
- Assuming that you have Node installed, you can use npm to install the Expo CLI command line utility:
```
npm install -g expo-cli
```
- Then run the following commands to create a new React Native project called "ExamplesReactNativeMaps":
```
expo init ExamplesReactNativeMaps
cd ExamplesReactNativeMaps
npm start
```
- After you give the npm start it will open a tab in browser with all about your app , i suggest you download the  `expo app` in your mobile.

- [Link how to learn use expo](https://expo.io/learn)

#### What we use in this example 
* Create a MapView
* Define initialRegion
* Define styles for the map
* We work with some properties of the map like (rotate,scroll,zoom,showBuildings,showPointsOfInterest)
* Create markers
* Create a ScrollView just like Airbnb
* In propertie ScrollView we used the function onMomentumScrollEnd that tell us how many scrolls we give 
* We work with propertie mapView.animateToCoordinate to animate when we select places in map 

### This is just a simple example how to use react-native-maps ,the library offer a lot more . 


