import React from 'react';

import {
    View,
    Text
} from 'react-native';

export class Event extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return <View style={mainViewStyle}>
                    <View style={clockStyle}>
                        <Text style={textStyle}>{this.props.minute}:00</Text>
                    </View>
                    <Text style={textInputStyle} multiline = {true} >{this.props.message}</Text>
                </View>
    }
}

const mainViewStyle = {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    height: 200,
    backgroundColor: '#E6FFDE'
}

const textStyle = {
    textAlignVertical: 'top',
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
}

const textInputStyle = {
    textAlignVertical: 'top',
    textAlign: 'center',
    fontSize: 22,
    color: 'black'
}

const clockStyle = {
    borderColor: '#248E04',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#D2FFC4',
    width: '30%',
    alignSelf: 'center'
}