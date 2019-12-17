import React from 'react';

import { ScoreBoard } from './ScoreBoard';
import { EventDisplay } from './EventDisplay';
import { NextEvent } from './NextEvent';

import { 
    View,
    Button
} from 'react-native';

export class PlayGame extends React.Component {
    constructor() {
        super();
        const num = Math.random();
        this.state = {
            minute: 0,
            team1: "Manchester United",
            team2: "Manchester City"
        };
        this.addMinute = this.addMinute.bind(this);
        this.newMessage = this.newMessage.bind(this);
    }

    startTeam(){
        const num = Math.random();
        if(num>0.5){
            this.setState({currentTeam: this.state.team1});
            this.setState({message: "Kick off to " + this.state.team1})
        } else {
            this.setState({currentTeam: this.state.team2});
            this.setState({message: "Kick off to " + this.state.team2})
        }
    }

    componentDidMount(){
        this.startTeam();
    }

    addMinute(){
        this.setState({minute: this.state.minute + 1});
    }

    newMessage(newMessage){
        this.setState({message: newMessage});
    }

    render() {
        return <View>
                    <ScoreBoard />
                    <EventDisplay minute={this.state.minute} message={this.state.message}/>
                    <NextEvent  addMinute={this.addMinute.bind(this)} 
                                newMessage={this.newMessage.bind(this)}
                                currentTeam={this.state.currentTeam}/>
                </View>
    }
    
}
