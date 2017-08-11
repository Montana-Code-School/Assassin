import React, {Component} from 'react'
import {Button, View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import {apiUrl} from '../localConfig'


class GhostRoom extends Component {
  logout(){
    fetch(apiUrl + '/logout', {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username: this.props.username})
    })
  }

  RIP(){
    fetch(apiUrl + '/bringOutYerDead', {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username: this.props.username})
    })
  }

  render(){

    const names = 'bob' //this.props.ghostRoom.map(name => (<Text> {name + '/n'} </Text>))

       return(
          <View>
            <View>
              <Text>The Fallen: {names}</Text>
              <Text>"Through me you go into a city of weeping; through me you go into eternal pain; through me you go amongst the lost people"</Text>
              <Text>Abandon All Hope Ye Who Enter Here!</Text>
              <Button onPress={() => this.props.logout} title={'LogOut'}/>
            </View>
            <Text>Into the eternal darkness, into fire and ice...I regret to inform you that you have been eliminated.  If you
            wish, you may remain here and watch for the last heir.</Text>
          </View>
          )
    }
  }

})

const mapStateToProps = (state) => ({
 token : state.token,
 roomCode: state.roomCode,
 username: state.username,
 alive: alive
})

const mapDispatchToProps = (dispatch) => ({

GhostRoom : (deadPlayers) => {dispatch(newGhostRoom(deadPlayers))}

})
}

const RoomConnector = connect(mapStateToProps, mapDispatchToProps)

export default RoomConnector(GhostRoom)
