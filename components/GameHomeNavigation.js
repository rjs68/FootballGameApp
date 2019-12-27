import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

export class GameHomeNavigation extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <View style={viewStyle}>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={textStyle}>Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={textStyle}>Transfers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={textStyle}>Academy</Text>
                    </TouchableOpacity>
                </View>
    }
}

const viewStyle = {
    width: Math.round(Dimensions.get('window').width),
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '3%'
}

const buttonStyle = {
    backgroundColor: '#F0DFC4',
    height: 80,
    width: '33%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5
}

const textStyle = {
    fontFamily: 'sans-serif',
    fontSize: 20,
    alignSelf: 'center'
}