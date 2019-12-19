import React from 'react';
import { Triangle } from './Triangle';
import { 
    View,
    Dimensions
 } from 'react-native';

export class Chevron extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <View style={[viewStyle, {left:this.props.leftPosition, right: this.props.rightPosition}]}>
            <Triangle position={-240} />
            <Triangle position={-130} />
            <Triangle position={-20} />
            <Triangle position={100} />
            <Triangle position={210} />
        </View>
    }
}

const viewStyle = {
    justifyContent: 'center',
    backgroundColor: '#277D0E',
    height: Math.round(Dimensions.get('window').height) * 0.75 - 25,
    width: 30,
    position: 'absolute',
    bottom: 22
}