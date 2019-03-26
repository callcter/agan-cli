import React from 'react'
import { View, StatusBar, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'

import HeaderIcon from './headerIcon'

const STATUS_BAR_HEIGHT = Adapter.height_sb
const HEADER_CONTENT_HEIGHT = Adapter.height_h
const HEADER_CONTAINER_HEIGHT = HEADER_CONTENT_HEIGHT + STATUS_BAR_HEIGHT
const isIOS = Adapter.isIOS

//用户主页header
class Index extends React.Component {
  static defaultProps = {
    leftElement: null,
    centerElement: null,
    renderCenter: null,
    rightElement: null,
    customHeaderStyle: null,
    barStyle: 'dark-content',
    hasBottomLine: false,
    fixAndroidModal: false,
    titleAlign: 'left',
    leftAbsolute: false,
    rightAbsolute: false,
    tint: Color.f_title,
    isAbsoluteHeader: false,
    handleStatusBar: true
  }
  static propTypes = {
    title: PropTypes.string,
    leftElement: PropTypes.element,
    centerElement: PropTypes.element,
    renderCenter: PropTypes.func,
    rightElement: PropTypes.element,
    barStyle: PropTypes.string,
    fixAndroidModal: PropTypes.bool,
    backgroundColor: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    titleAlign: PropTypes.string,
    leftAbsolute: PropTypes.bool,
    rightAbsolute: PropTypes.bool,
    tint: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isAbsoluteHeader: PropTypes.bool,
    handleStatusBar: PropTypes.bool
  }
  render(){
    const containerStyle = [styles.headerContainer]
    if(this.props.fixAndroidModal && !isIOS) containerStyle.push(styles.fixAndroidModal)
    if(this.props.hasBottomLine) containerStyle.push(styles.bottomLine)
    if(this.props.customHeaderStyle) containerStyle.push(this.props.customHeaderStyle)
    if(this.props.backgroundColor) containerStyle.push({backgroundColor: this.props.backgroundColor})
    if(this.props.isAbsoluteHeader) containerStyle.push({position: 'absolute', top: 0, left: 0, right: 0})

    const titleContainerStyle = [styles.titleContainer]
    if(this.props.titleAlign === 'center') titleContainerStyle.push({justifyContent:'center'})

    const titleTextStyle = [styles.headerTitle, {color: this.props.tint}]
    if(this.props.titleAlign === 'center') titleTextStyle.push({marginLeft: 0})

    return (
      <Animated.View style={containerStyle}>
        {
          this.props.handleStatusBar &&
          <StatusBar
            animated={true}
            hidden={false}
            backgroundColor={'transparent'}
            translucent={true}
            barStyle={this.props.barStyle} />
        }
        <View style={styles.headerContent}>
          {
            this.props.leftElement ?
            <View style={this.props.leftAbsolute ? styles.leftAbsolute : {}}>
              { this.props.leftElement }
            </View> :
            <HeaderIcon
              style={this.props.leftAbsolute ? styles.leftAbsolute : {}}
              color={this.props.tint}
              name='houtui'
              onPress={()=>this.props.dispatch(NavigationActions.back())} />
          }
          {
            this.props.title && this.props.title.length > 0 ?
            <View style={titleContainerStyle}>
              <Animated.Text numberOfLines={1} style={titleTextStyle}>{this.props.title}</Animated.Text>
            </View> :
            <View style={{flex:1}}>
              { this.props.centerElement ? this.props.centerElement : this.props.renderCenter ? this.props.renderCenter() : null }
            </View>
          }
          <View style={this.props.rightAbsolute ? styles.rightAbsolute : {}}>
            { this.props.rightElement }
          </View>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width:'100%',
    height: HEADER_CONTAINER_HEIGHT,
    backgroundColor: Color.white,
    paddingTop: STATUS_BAR_HEIGHT,
    zIndex: 1000
  },
  fixAndroidModal: {
    height: HEADER_CONTENT_HEIGHT,
    paddingTop: 0
  },
  leftAbsolute: {
    position:'absolute',
    left: 0,
    bottom: 0,
    height: HEADER_CONTENT_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  rightAbsolute: {
    position:'absolute',
    right: 0,
    bottom: 0,
    height: HEADER_CONTENT_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11
  },
  bottomLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Color.l_high
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerTitle: {
    color: Color.f_title,
    fontSize: Adapter.fs_title,
    fontWeight: '700',
    marginLeft: 6 * Adapter.REM,
    textAlign: 'center'
  }
})

export default Index