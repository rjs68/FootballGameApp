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
                <Text>{this.state.team1Name}</Text>
                <Text>{this.state.team1Score}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <Text>{this.state.team2Name}</Text>
                <Text>{this.state.team2Score}</Text>
            </View>
        </View>
    }
}