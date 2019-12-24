import React from 'react';

import {
    Image,
    View
} from 'react-native';

export class PickTeamDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <View style={{width: '30%', height: '15%', top: '20%', alignSelf: 'center', borderWidth: 8, borderColor: 'white', borderRadius: 10}}>
            <Image source={require('../images/Flags/belgium.png')} style={{width: '100%', height: '100%'}} />
        </View>
    }
}