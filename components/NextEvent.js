import React from 'react';

import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export class NextEvent extends React.Component {
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.addScorer = this.addScorer.bind(this);
    }

    addScorer(){
        const num = Math.floor(Math.random()*5);
        if(this.props.currentTeam === "Manchester United"){
            const players = ["Rashford", "Martial", "James", "Mata", "Pogba", "Lingard"];
            this.props.addScorer(players[num]);
        } else {
            const players = ["Aguero", "Jesus", "Sterling", "B. Silva", "De Bruyne", "D. Silva"];
            this.props.addScorer(players[num]);
        }
    }

    handlePress(){
        let message = "";
        const num = Math.random();

        if(this.props.gameZone === "Middle"){
            if(num<0.3){
                message = this.props.currentTeam + " continue to build";
            }else if(num<0.6){
                message = this.props.currentTeam + " lose the ball";
                this.props.changeTeam();
            }else{
                message = this.props.currentTeam + " are on the attack";
                this.props.changeGameZone("Attack");
            }
        }else if(this.props.gameZone === "Defence"){
            if(num<0.7){
                message = this.props.currentTeam + " play it out of the back";
                this.props.changeGameZone("Middle");
            }else {
                this.props.changeTeam();
                message = "It's stolen by the opposition";
                this.props.changeGameZone("Attack");
            }
        }else if(this.props.gameZone === "Attack"){
            if(num<0.5){
                message = "He shoots...";
                if(num<0.2){
                    message += "\nGOAL!!!";
                    this.props.addGoal(this.props.currentTeam);
                    this.addScorer();
                    this.props.changeGameZone("Middle");
                }else{
                    message += "\nHe can't find the net";
                    this.props.changeGameZone("Defence");
                }
                this.props.changeTeam();
            }else{
                message = "The defence don't let them through";
                this.props.changeTeam();
                this.props.changeGameZone("Defence");
            }
        }

        this.props.addMinute();
        this.props.newMessage(message);
    }

    render() {
        return <TouchableOpacity onPress={this.handlePress} style={mainStyle}>
                    <View style={buttonStyle}>
                        <Text style={textStyle}>Next</Text>
                    </View>
                </TouchableOpacity>
    }
}

const mainStyle = {
    // backgroundColor: '#E6FFDE',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 210,
    left: -7,
    width: 350
}

const textStyle = {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
}

const buttonStyle = {
    borderColor: '#030BCC',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#D7D9FF',
    width: '40%',
    alignSelf: 'center',
}