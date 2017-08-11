import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View,Button } from 'react-native';
import { Provider } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer';
import Authentication from "./components/Authentication"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Lobby from "./components/Lobby"
import Room from "./components/Room"
import Loading from "./components/Loading"
import Game from "./components/Game"
import GhostRoom from "./components/GhostRoom"
import LocationWatcher from "./components/LocationWatcher"
import store from './redux/store'
import {locate} from './redux/actions'
import {StackNavigator} from 'react-navigation'

console.log('Login', Login)


  const Header = (Component) => (props) => {
    return (<View>
        <Button title="Logout" onPress={()=>props.navigation.navigate('Login')} />
        <Component {...props}/>
      </View>)
      //logout of game
      //   logout(){
      //    fetch('/logout', {
      //      method: 'PUT',
      //      headers: {
      //        "Content-Type": 'application/json'
      //      },
      //      body: JSON.stringify({username: this.username})
      //    })
      //  }

  }
  const Navigator = StackNavigator({
    Authentication: {screen: Authentication},
    Login: { screen: Login },
    Lobby: { screen: Header(Lobby) },
    Room: { screen: Header(Room) },
    Loading: { screen: Header(Loading) },
    Game: { screen: Header(Game) },
    GhostRoom: {screen: Header(GhostRoom)},
    Logout: {screen: Login}
  });

  AppRegistry.registerComponent('Navigator', () => Navigator);

export default class App extends Component {
  constructor(props){
    super(props);
    const geolocatorTimer = BackgroundTimer.setInterval (() => {
      navigator.geolocation.getCurrentPosition(
        (position) => store.dispatch(locate(position.coords.latitude, position.coords.longitude, null)),
        (error) => store.dispatch(locate(null,null, error.message)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      )
    }, 3000);
   // this.logout = this.logout.bind(this)
  }



  render() {
    return (
      <Provider store = {store}>
         <Navigator/>
      </Provider>
    );
  }
}
