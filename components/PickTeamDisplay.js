import React from 'react';

import {
    Image,
    View
} from 'react-native';

let icon;

export class PickTeamDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        switch(this.props.team){
            case 'Algeria': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/algeria.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Argentina': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/argentina.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Australia': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/australia.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Belgium': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/belgium.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Brazil': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/brazil.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Cameroon': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/cameroon.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Canada': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/canada.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'China': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/china.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Chile': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/chile.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Colombia': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/colombia.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Cote D\'Ivoire': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/cotedivoire.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Ecuador': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/ecuador.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'England': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/england.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Finland': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/finland.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'France': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/france.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Germany': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/germany.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Italy': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/italy.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Jamaica': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/jamaica.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Japan': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/japan.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Mexico': return <View style={viewStyle}>
                                    <Image source={require('../images/Flags/mexico.jpg')} style={{width: '100%', height: '100%'}} />
                                </View>;
            case 'Netherlands': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/netherlands.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'New Zealand': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/newzealand.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Nigeria': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/nigeria.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Northern Ireland': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/northernireland.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Portugal': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/portugal.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Ireland': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/republicireland.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Russia': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/russia.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Scotland': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/scotland.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'South Korea': return <View style={viewStyle}>
                                    <Image source={require('../images/Flags/southkorea.jpg')} style={{width: '100%', height: '100%'}} />
                                </View>;
            case 'Spain': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/spain.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Uruguay': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/uruguay.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'USA': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/usa.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            case 'Wales': return <View style={viewStyle}>
                                        <Image source={require('../images/Flags/wales.jpg')} style={{width: '100%', height: '100%'}} />
                                    </View>;
            default: return <View style={viewStyle}>
                                <Image source={require('../images/Flags/wales.jpg')} style={{width: '100%', height: '100%'}} />
                            </View>;
        }
        
    }
}

const viewStyle = {
    width: '30%', 
    height: '15%', 
    top: '20%', 
    alignSelf: 'center', 
    borderWidth: 7, 
    borderColor: 'white', 
    borderRadius: 10
}