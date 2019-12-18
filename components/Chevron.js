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
            <Triangle position={20} />
            <Triangle position={90} />
            <Triangle position={160} />
            <Triangle position={230} />
            <Triangle position={300} />
            <Triangle position={370} />
            <Triangle position={440} />
            <Triangle position={510} />
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