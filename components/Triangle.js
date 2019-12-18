import React from 'react';
import { View } from 'react-native';

export class Triangle extends React.Component { 
    constructor(props){
        super(props);
    }

    render() { 
        return <View style={[triangle, {top: this.props.position}]} /> }
    }

const triangle = { 
    position: 'absolute',
    left: 8,
    width: 0, 
    height: 0, 
    backgroundColor: 'transparent', 
    borderStyle: 'solid', 
    borderLeftWidth: 8,
    borderRightWidth: 8, 
    borderBottomWidth: 30, 
    borderLeftColor: 'transparent', 
    borderRightColor: 'transparent', 
    borderBottomColor: 'red' }