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
            <Triangle position={-270} />
            <Triangle position={-200} />
            <Triangle position={-130} />
            <Triangle position={-60} />
            <Triangle position={10} />
            <Triangle position={80} />
            <Triangle position={150} />
            <Triangle position={220} />
        </View>
    }
}

const viewStyle = {
    justifyContent: 'center',
    backgroundColor: 'black',
    height: Math.round(Dimensions.get('window').height) * 0.75,
    width: 30,
    position: 'absolute',
    bottom: 0
}