import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Login extends Component {
  render(){
    return (
      <View style={{flex:1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Text>登录</Text>
      </View>
    )
  }
}

export default connect(null)(Login)
