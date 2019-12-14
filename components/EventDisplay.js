import React from 'react';

import {
    ScrollView,
    TextInput,
    View,
    Text
} from 'react-native';

export class EventDisplay extends React.Component {
    constructor(){
        super();
        this.state = {
            displayMessages: ["Kick off to Manchester United"]
        }
    }

    render(){
        return <ScrollView style={{borderWidth: 10, borderColor: 'transparent'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={textStyle}>1'</Text>
                <TextInput editable = {false} style={textInputStyle}>{this.state.displayMessages[0]}</TextInput>
            </View>
        </ScrollView>
    }
}

const textStyle = {
    width: 40,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 14
}

const textInputStyle = {
    textAlignVertical: 'center',
    fontSize: 14,
    color: 'black'
}