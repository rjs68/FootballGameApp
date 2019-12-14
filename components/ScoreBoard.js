import React from 'react';
import { 
    Text ,
    View
} from 'react-native';

export class ScoreBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            team1Name: "Manchester United",
            team2Name: "Manchester City",
            team1Score: "0",
            team2Score: "0",
        };
    }

    render() {
        return <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{width: '87%'}}>
                    <Text style={teamNameStyle}>{this.state.team1Name}</Text>
                </View>
                <Text style={scoreStyle}>{this.state.team1Score}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{borderLeftWidth: '4px', width: '87%'}}>
                    <Text style={teamNameStyle}>{this.state.team2Name}</Text>
                </View>
                <Text style={scoreStyle}>{this.state.team2Score}</Text>
            </View>
        </View>
    }
}

const teamNameStyle = {
    fontSize: 25,
    lineHeight: 50
}

const scoreStyle = {
    fontSize: 25,
    lineHeight: 50
}