import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

/**
 * The login screen of the app 
 */
export class LoginScreen extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
    return <View style={{height: Math.round(Dimensions.get('window').height)}}>
            <ImageBackground source={require('../images/stadium.jpg')} style={{width: '100%', height: '100%'}}>
              <Text style={textStyle}>
                Login
              </Text>
              <TextInput style={[inputStyle, {top: 465}]}>
                  Username
              </TextInput>
              <TextInput style={[inputStyle, {top: 470}]}>
                  Password
              </TextInput>
              <TouchableOpacity style={buttonStyle} onPress={this.props.handlePress}>
                <View>
                  <Text style={buttonTextStyle}> 
                    Login
                  </Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
            </View>
    }
}

const textStyle = {
  color: 'white',
  textShadowColor: 'black',
  textShadowRadius: 20,
  alignSelf: 'center',
  fontSize: 50,
  top: 90,
  fontFamily: 'sans-serif'
}

const inputStyle = {
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: '#dedede',
  width: '70%',
  alignSelf: 'center',
  top: 460,
  fontSize: 20,
  textAlign: 'center'
}

const buttonTextStyle = {
    fontFamily: 'sans-serif',
    fontSize: 30,
    alignSelf: 'center'
  }
  
  const buttonStyle = {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '40%',
    alignSelf: 'center',
    top: 500
  }