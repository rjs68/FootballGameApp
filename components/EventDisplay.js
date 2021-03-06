import React, { useState } from 'react';

import {
    Animated,
} from 'react-native';

import { Event } from './Event';

export const EventDisplay = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
    
    React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 5000,
          }
        ).start();
      }, [])

      return (
        <Animated.View                 // Special animatable View
          style={{
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
            <Event minute={props.minute} message={props.message}/>
        </Animated.View>
      );
      
}
