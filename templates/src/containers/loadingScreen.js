import React from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'

class LoadingScreen extends React.Component {
  componentDidMount(){
    this.props.navigation.navigate('Boot')
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar translucent={true} hidden={true} />
      </View>
    )
  }
}

export default connect(null)(LoadingScreen)