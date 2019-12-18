import React from 'react';

import { 
    Image,
    View
} from 'react-native'; 

export class DynamicPitch extends React.Component{
    render() {
        return <View style={{justifyContent: 'center', alignItems: 'center', height: '40%'}}>
                <Image source={require('../images/birdseyePitch.png')} style={{width: '50%', height: '50%'}}>

                </Image>
                </View>
    }
}