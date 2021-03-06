import React from 'react';
import { Triangle } from './Triangle';
import { UpsideDownTriangle } from './UpsideDownTriangle';
import { 
    View,
    Dimensions
 } from 'react-native';

export class Chevron extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.currentTeam === "Manchester United"){
            return <View style={[viewStyle, {left:this.props.leftPosition, right: this.props.rightPosition}]}>
                        <Triangle position={-240} />
                        <Triangle position={-130} />
                        <Triangle position={-20} />
                        <Triangle position={90} />
                        <Triangle position={200} />
                    </View>
        } else {
            return <View style={[viewStyle, {left:this.props.leftPosition, right: this.props.rightPosition}]}>
                        <UpsideDownTriangle position={-240} />
                        <UpsideDownTriangle position={-130} />
                        <UpsideDownTriangle position={-20} />
                        <UpsideDownTriangle position={90} />
                        <UpsideDownTriangle position={200} />
                    </View>
        }
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