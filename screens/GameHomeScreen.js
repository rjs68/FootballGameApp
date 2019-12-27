import React from 'react';
import { 
    View,
    TouchableOpacity, 
    Text,
    Dimensions,
    ImageBackground
} from 'react-native';

import { GameHomeNavigation } from '../components/GameHomeNavigation';

export class GameHomeScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <View style={{height: Math.round(Dimensions.get('window').height)}}>
                    <ImageBackground source={require('../images/stadium.jpg')} style={{width: '100%', height: '100%'}}>
                        <GameHomeNavigation />
                    </ImageBackground>
                </View>
    }
}
