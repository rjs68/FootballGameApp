import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Picker,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { TeamPicker } from '../components/TeamPicker';

/**
 * The login screen of the app 
 */
export class PickTeamScreen extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
    return <View style={{height: Math.round(Dimensions.get('window').height)}}>
            <ImageBackground source={require('../images/stadium.jpg')} style={{width: '100%', height: '100%'}}>
              <Text style={textStyle}>
                Pick Teams
              </Text>
              <TeamPicker top={460} initialValue="Home Team..." setTeam={this.props.setHomeTeam}/>
              <TeamPicker top={465} initialValue="Away Team..." setTeam={this.props.setAwayTeam}/>
              <TouchableOpacity style={buttonStyle} onPress={this.props.handlePress}>
                <View>
                  <Text style={buttonTextStyle}> 
                    Play
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
  backgroundColor: 'grey',
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
    borderColor: '#030BCC',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#D7D9FF',
    width: '40%',
    alignSelf: 'center',
    top: 500
  }