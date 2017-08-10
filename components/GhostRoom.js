import React, {Component} from 'react'
import {Button, View, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'

class GhostRoom extends Component {
  logout(){
    fetch('/logout', {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username: this.username})
    })
  }

  RIP(){
    fetch('/bringOutYerDead', {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({username: this.username})
    })
  }

  render(){
    const name = this.props.ghostRoom.map(name => (<Text> {name + '/n'} </Text>))
     if(this.username.isAlive === 'false'){
       return(

          <View>
            <View>
              <Text>The Fallen: {names}</Text>
              <Text>"Through me you go into a city of weeping; through me you go into eternal pain; through me you go amongst the lost people"</Text>
              <Text>Abandon All Hope Ye Who Enter Here!</Text>
              <Button onPress={() => this.props.logout} title={'LogOut'}/>
            </View>
            <Text>Into the eternal darkness, into fire and ice...</Text>
          </View>
          )
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44
  }
})

const mapStateToProps = (state) => ({
 token : state.token,
 roomCode: state.roomCode,
 username: state.username,
 isAlive: isAlive
})

const mapDispatchToProps = (dispatch) => ({
GhostRoom : (deadPlayers) => {dispatch(newGhostRoom(deadPlayers))}
})
}

const RoomConnector = connect(mapStateToProps, mapDispatchToProps)

export default RoomConnector(GhostRoom)
