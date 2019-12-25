import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

/**
 * The main welcome screen of the app 
 */
export class HomeScreen extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
    return <View style={{height: Math.round(Dimensions.get('window').height)}}>
            <ImageBackground source={require('../images/stadium.jpg')} style={{width: '100%', height: '100%'}}>
              <Text style={textStyle}>
                Football World
              </Text>
              {/* Button to start the game */}
              {/* <Button title="Next" onPress={this.props.handlePress} /> */}
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
  top: 550
}