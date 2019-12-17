import React from 'react';

import {
    TouchableOpacity,
    Text
} from 'react-native';

export class NextEvent extends React.Component {
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(){
        let message = "";
        const num = Math.random();

        if(num<0.3){
            message = this.props.currentTeam + " continue to build";
        }else if(num<0.6){
            message = this.props.currentTeam + " lose the ball";
        }else{
            message = this.props.currentTeam + " are on the attack";
        }

        this.props.addMinute();
        this.props.newMessage(message);
    }

    render() {
        return <TouchableOpacity onPress={this.handlePress}>
                    <Text>Next</Text>
                </TouchableOpacity>
    }
}