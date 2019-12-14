import React from 'react';
import { 
    Text ,
    View,
    ImageBackground
} from 'react-native';

export class ScoreBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            team1Name: "Manchester United",
            team2Name: "Manchester City",
            team1Score: "3",
            team2Score: "1",
            team1Scorers: "Rashford (23'), Martial (78'), Mata (82')",
            team2Scorers: "Aguero (52')"
        };
    }

    render() {
        return <View style={{flex: 1, flexDirection: 'column'}}>
            <ImageBackground source={require('../images/pitch.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={teamViewStyle}>
                        <View style={{height: 30}} />
                        <Text style={teamNameStyle}>{this.state.team1Name}</Text>
                    </View>
                    <Text style={scoreStyle}>{this.state.team1Score}</Text>
                </View>
                <View style={teamViewStyle}>
                    <Text style={teamScorersStyle}>{this.state.team1Scorers}</Text>
                </View>
                <View style={{height: 20}} />
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={teamViewStyle}>
                        <Text style={teamNameStyle}>{this.state.team2Name}</Text>
                    </View>
                    <Text style={scoreStyle}>{this.state.team2Score}</Text>
                </View>
                <View style={teamViewStyle}>
                    <Text style={teamScorersStyle}>{this.state.team2Scorers}</Text>
                </View>
                <View style={{height: 30}} />
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