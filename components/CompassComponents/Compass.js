import React, {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View, Animated, Image, Easing  } from 'react-native'
import RNSimpleCompass from 'react-native-simple-compass'
import {connect} from 'react-redux'

class Compass extends Component {

  constructor(props) {
      super(props)
      this.state = {
        degree: 0
      }
      this.rotateValue = new Animated.Value(0);
      this.updateAngle = this.updateAngle.bind(this);
    }

  componentWillUnmount(){
    stopInterval(this.interval)
  }

  updateAngle() {
    const degree_update_rate = 3;

    RNSimpleCompass.start(degree_update_rate, (degree) => {
      this.setState({degree: degree});
      RNSimpleCompass.stop();
    })
  }

  componentDidMount() {
    this.updateAngle()
    this.interval =setInterval(this.updateAngle, 100)
  }

  render() {
    let rotateAngle = this.props.angle - this.state.degree
   return (<View style={centering.container}>
          <Text>{this.props.distance}</Text>
          <Animated.Image style={{width: 200, height: 200, transform:[{rotate: rotateAngle + "deg"}]}} source={require('./arrow.png')}/>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  angle: state.angleToTarget,
  distance: state.distanceToTarget
})

const centering = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 100

  },
});

export default connect(mapStateToProps)(Compass)
