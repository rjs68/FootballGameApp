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
import { PickTeamDisplay } from '../components/PickTeamDisplay';

/**
 * The login screen of the app 
 */
export class PickTeamScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        teamNumber: 0,
        team: ''
      }
      this.firstTeam = this.firstTeam.bind(this);
      this.nextTeam = this.nextTeam.bind(this);
      this.previousTeam = this.previousTeam.bind(this);
    }

    firstTeam(state){
      this.setState(state);
    }

    nextTeam(nextState) {
      if(this.state.teamNumber >= 32){
        this.setState({teamNumber: 0});
      } else {
        this.setState({teamNumber: this.state.teamNumber + 1});
      }
      this.setState(nextState);
    }

    previousTeam(nextState) {
      if(this.state.teamNumber <= 0){
        this.setState({teamNumber: 32});
      } else {
        this.setState({teamNumber: this.state.teamNumber - 1});
      }
      this.setState(nextState);
      this.props.setTeam(this.state.team);
    }

    render() {
    return <View style={{height: Math.round(Dimensions.get('window').height)}}>
            <ImageBackground source={require('../images/stadium.jpg')} style={{width: '100%', height: '100%'}}>
              <Text style={textStyle}>
                Pick Your Team
              </Text>
              <PickTeamDisplay team={this.state.team} icon={this.state.teamIcon}/>
              <TeamPicker teamNumber={this.state.teamNumber} 
                          team={this.state.team} 
                          firstTeam={this.firstTeam.bind(this)} 
                          nextTeam={this.nextTeam.bind(this)} 
                          previousTeam={this.previousTeam.bind(this)}
                          setTeam={this.props.setTeam}/>
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
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '40%',
    alignSelf: 'center',
    top: '50%'
  }