import React from 'react';

import { ScoreBoard } from './ScoreBoard';
import { EventDisplay } from './EventDisplay';
import { NextEvent } from './NextEvent';
import { Chevron } from './Chevron';

import { 
    View,
    Dimensions,
    ImageBackground
} from 'react-native';

export class PlayGame extends React.Component {
    constructor() {
        super();
        this.state = {
            minute: 0,
            team1: "Manchester United",
            team1Score: 0,
            team1Scorers: "",
            team2: "Manchester City",
            team2Score: 0,
            team2Scorers: "",
            gameZone: "Middle"
        };
        this.addMinute = this.addMinute.bind(this);
        this.addGoal = this.addGoal.bind(this);
        this.newMessage = this.newMessage.bind(this);
        this.changeTeam = this.changeTeam.bind(this);
        this.changeGameZone = this.changeGameZone.bind(this);
    }

    startTeam(){
        const num = Math.random();
        if(num>0.5){
            this.setState({currentTeam: this.state.team1});
            this.setState({message: "Kick off to " + this.state.team1});
        } else {
            this.setState({currentTeam: this.state.team2});
            this.setState({message: "Kick off to " + this.state.team2});
        }
    }

    changeTeam(){
        if(this.state.currentTeam === this.state.team1){
            this.setState({currentTeam: this.state.team2});
        }else{
            this.setState({currentTeam: this.state.team1});
        }
    }

    changeGameZone(newGameZone){
        this.setState({gameZone: newGameZone});
    }

    componentDidMount(){
        this.startTeam();
    }

    addMinute(){
        this.setState({minute: this.state.minute + 1});
    }

    addGoal(team){
        if(team === this.state.team1){
            this.setState({team1Score: this.state.team1Score + 1});
        }else {
            this.setState({team2Score: this.state.team2Score + 1});
        }
    }

    newMessage(newMessage){
        this.setState({message: newMessage});
    }

    render() {
        return <View style={{backgroundColor: '#E6FFDE', flexDirection: 'column', height: Math.round(Dimensions.get('window').height)}}>
                    <View style={{height: '25%'}}>
                    <ScoreBoard 
                        team1={this.state.team1}
                        team1Score={this.state.team1Score}
                        team1Scorers={this.state.team1Scorers}
                        team2={this.state.team2}
                        team2Score={this.state.team2Score}
                        team2Scorers={this.state.team2Scorers}/>
                    </View>
                    <View style={{height: '75%'}}>
                        <ImageBackground source={require('../images/birdseyePitch.png')} style={{width: '93%', height: '98%', alignSelf: 'center', position: 'absolute', left: 26}}>
                            <EventDisplay 
                                minute={this.state.minute}
                                message={this.state.message}/>
                            <NextEvent  
                                addMinute={this.addMinute.bind(this)} 
                                addGoal={this.addGoal.bind(this)}
                                newMessage={this.newMessage.bind(this)}
                                changeTeam={this.changeTeam.bind(this)}
                                changeGameZone={this.changeGameZone.bind(this)}
                                currentTeam={this.state.currentTeam}
                                gameZone={this.state.gameZone}/>
                        </ImageBackground>
                    </View>
                    <Chevron leftPosition={0} rightPosition={null} />
                    <Chevron leftPosition={null} rightPosition={0} />
                </View>
    }
    
}
