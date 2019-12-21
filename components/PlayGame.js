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

/**
 * Screen to assemble all the elements and provide gameplay methods
 */

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
        this.addScorer = this.addScorer.bind(this);
        this.newMessage = this.newMessage.bind(this);
        this.changeTeam = this.changeTeam.bind(this);
        this.changeGameZone = this.changeGameZone.bind(this);
    }

    //Method to randomly determine the start team
    startTeam(){
        const num = Math.random();
        if(num>0.5){
            this.setState({currentTeam: this.props.homeTeam});
            this.setState({message: "Kick off to " + this.props.homeTeam});
        } else {
            this.setState({currentTeam: this.props.awayTeam});
            this.setState({message: "Kick off to " + this.props.awayTeam});
        }
    }

    //Method to change the current team
    changeTeam(){
        if(this.state.currentTeam === this.props.homeTeam){
            this.setState({currentTeam: this.props.awayTeam});
        }else{
            this.setState({currentTeam: this.props.homeTeam});
        }
    }

    //Method to change the game zone
    changeGameZone(newGameZone){
        this.setState({gameZone: newGameZone});
    }

    //Call to decide the starting team
    componentDidMount(){
        this.startTeam();
    }

    //Adds a minute to the clock
    addMinute(){
        this.setState({minute: this.state.minute + 1});
    }

    //Adds a goals to a specific team
    addGoal(team){
        if(team === this.this.props.homeTeam){
            this.setState({team1Score: this.state.team1Score + 1});
        }else {
            this.setState({team2Score: this.state.team2Score + 1});
        }
    }

    //Adds a goal scorer
    addScorer(scorer){
        if(this.state.currentTeam === this.props.homeTeam){
            if(this.state.team1Scorers === ""){
                this.setState({team1Scorers: scorer + " (" + this.state.minute + "')"});
            }else {
                this.setState({team1Scorers: this.state.team1Scorers + ", " + scorer + " (" + this.state.minute + "')"});
            }
        }else {
            if(this.state.team2Scorers === ""){
                this.setState({team2Scorers: scorer + " (" + this.state.minute + "')"});
            }else {
                this.setState({team2Scorers: this.state.team2Scorers + ", " + scorer + " (" + this.state.minute + "')"});
            }
        }
    }

    //Changes the on-screen message
    newMessage(newMessage){
        this.setState({message: newMessage});
    }

    //Renders the components
    render() {
        return <View style={{backgroundColor: '#E6FFDE', flexDirection: 'column', height: Math.round(Dimensions.get('window').height)}}>
                    <View style={{height: '25%'}}>
                    <ScoreBoard 
                        team1={this.props.homeTeam}
                        team1Score={this.state.team1Score}
                        team1Scorers={this.state.team1Scorers}
                        team2={this.props.awayTeam}
                        team2Score={this.state.team2Score}
                        team2Scorers={this.state.team2Scorers}/>
                    </View>
                    <View style={{height: '75%', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 3, borderColor: 'white'}}>
                        <ImageBackground source={require('../images/birdseyePitch.png')} style={{width: '93%', height: '98%', alignSelf: 'center', position: 'absolute', left: 26}}>
                            <EventDisplay 
                                minute={this.state.minute}
                                message={this.state.message}/>
                            <NextEvent  
                                addMinute={this.addMinute.bind(this)} 
                                addGoal={this.addGoal.bind(this)}
                                addScorer={this.addScorer.bind(this)}
                                newMessage={this.newMessage.bind(this)}
                                changeTeam={this.changeTeam.bind(this)}
                                changeGameZone={this.changeGameZone.bind(this)}
                                currentTeam={this.state.currentTeam}
                                gameZone={this.state.gameZone}/>
                        </ImageBackground>
                        <Chevron leftPosition={0} rightPosition={null} currentTeam={this.state.currentTeam}/>
                        <Chevron leftPosition={null} rightPosition={0} currentTeam={this.state.currentTeam}/>
                    </View>
                    
                </View>
    }
    
}
