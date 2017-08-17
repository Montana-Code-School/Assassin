import React, {Component} from 'react'
import {Button, View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import Compass from './GameComponents/CompassComponents/Compass'
import KillButton from './GameComponents/KillButton'
import Timer from './GameComponents/Timer'
import BackgroundTimer from 'react-native-background-timer'
import {apiUrl} from '../localConfig'
import {newHeartBeat} from '../redux/actions'

class Game extends Component {
  constructor(props){
    super(props);
    let self = this;
    const heartbeatTimer = BackgroundTimer.setInterval (() => {
          fetch(apiUrl + '/user/heartbeat', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token' : self.props.token
            },
            body: JSON.stringify({username: self.props.username,
                                  latitude: self.props.latitude,
                                  longitude: self.props.longitude
                                })
          })
          .then(response => response.json())
          .then(result => console.log("RESULT ", result))
          .then(()=>{
            fetch(apiUrl + `/user/game/data/${self.props.username}`,{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token' : self.props.token
              }
            })
            .then(response => response.json())
            .then(result => {
              console.log("all the stuff: theta: ", result.theta,"\n distance: ", result.distance,"\n target: ", result.target,"\n tt ", result.targetsTarget,"\n listObj", result.listObj,"\n hireable", result.listObj[self.props.username].hireable)
              self.props.heartbeat(result.theta, result.distance, result.target, result.targetsTarget, result.listObj, result.listObj[self.props.username].hireable)
              if(result.listObj[self.props.username].alive === 'dead') {
                self.props.navigation.navigate('GhostRoom')
              }
            })
          })
    }, 1500);

  }

  render(){
    return (
      <View style = {styles.container}>
        <Button title='Rules' onPress={()=> Alert.alert('Rules',
          `Be advised that Mother has laid out a set of rules in her last will and testament.  The rules must be
          followed and obeyed or you will be disqualified from the pool of potential heirs. Mother has gifted you with a
          locator to aid you in your quest.  I must also disclose that you have also been tagged with a locator and are
          being hunted. Do not attempt to locate or disarm your locator. Doing so will disqualify and eliminate you from
          the pool of heirs. Upon your login you will have a two minute wait time before you can eliminate your rival.
          You will be alerted when you are within a kill radius, and can be eliminated by a rival.  Be advised that this
          radius is smaller than the target radius, which you will also recieve when your target is near. This means, of
          course, that your hunter will see you before you see them. The final rule: If you do not stay active on your phone
          for at least 3 hours per day, you will be permanently and irrevocably eliminated from inheritance.
          Stay alert, stay safe, stay alive.`)}></Button>
        <Button color = 'darkred' style = {styles.button} onPress={()=>this.props.navigation.navigate('GhostRoom')} title={'You Are Dead'}/>
        <Timer/>
        <Compass />
        <KillButton />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'darkred',
  },
  words: {
    color: 'white',
  }
})

const mapStateToProps = (state) => ({
  token : state.token,
  roomCode: state.roomCode,
  username: state.username,
  latitude: state.latitude,
  longitude: state.longitude,
  target: state.target,
  targetsTarget: state.targetsTarget,
  distance: state.distance,
  theta: state.theta,
  hireable: state.hireable
})

const mapDispatchToProps = (dispatch) => ({
  heartbeat: (theta, distance, target, targetsTarget, listObj, hireable)=>{dispatch(newHeartBeat(theta, distance, target, targetsTarget, listObj, hireable))}
})

const GameConnector = connect(mapStateToProps, mapDispatchToProps)

export default GameConnector(Game)
