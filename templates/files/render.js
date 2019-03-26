import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class FileName extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  static propTypes = {}
  static defaultProps = {}
  static navigationOptions = {}
  componentWillMount(){}
  componentDidMount(){}
  componentWillUnmount(){}
  render(){
    return (
      <View>
        <Text>Template</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)

const styles = StyleSheet.create({})