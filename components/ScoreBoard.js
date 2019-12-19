import React from 'react';
import { 
    Text ,
    View,
    ImageBackground
} from 'react-native';

export class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={{flex: 1, flexDirection: 'column', borderWidth: 1, borderColor: 'white'}}>
            <ImageBackground source={require('../images/pitch.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={teamViewStyle}>
                        <View style={{height: 10}} />
                        <Text style={teamNameStyle}>{this.props.team1}</Text>
                    </View>
                    <Text style={scoreStyle}>{this.props.team1Score}</Text>
                </View>
                <View style={teamViewStyle}>
                    <Text style={teamScorersStyle}>{this.props.team1Scorers}</Text>
                </View>
                <View style={{height: 10}} />
                <View style={{flexDirection: 'row'}}>
                    <View style={teamViewStyle}>
                        <Text style={teamNameStyle}>{this.props.team2}</Text>
                    </View>
                    <Text style={scoreStyle}>{this.props.team2Score}</Text>
                </View>
                <View style={teamViewStyle}>
                    <Text style={teamScorersStyle}>{this.props.team2Scorers}</Text>
                </View>
                <View style={{height: 10}} />
            </ImageBackground>
        </View>
    }
}

const teamNameStyle = {
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    lineHeight: 50,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10
}

const scoreStyle = {
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    lineHeight: 50,
    textAlignVertical: 'bottom',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10
}

const teamViewStyle = {
    borderLeftWidth: 25,
    borderLeftColor: 'transparent',
    width: '87%'
}

const teamScorersStyle = {
    lineHeight: 20,
    fontFamily: 'sans-serif',
    textAlignVertical: 'top',
    width: '80%',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10
}