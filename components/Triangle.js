import React, { useState } from 'react';
import { 
    View,
    Animated
} from 'react-native';

export const Triangle = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
            toValue: 1,
            duration: 500,
            }
        ).start();
    }, [])

        return (
        <Animated.View style={{opacity: fadeAnim}}>
            <View style={[triangle, {top: props.position}] }/> 
        </Animated.View>
        )
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
    borderBottomColor: 'red'}