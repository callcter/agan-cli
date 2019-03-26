import React, { Component } from 'react'
import { View, StatusBar, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

class BootScreen extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden = {true}/>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('App')}>
          <Text>进入APP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null)(BootScreen)
