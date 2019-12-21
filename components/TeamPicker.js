import React from 'react';
import { Picker } from 'react-native';
    
export class TeamPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
      }

    render() {
    return <Picker
        selectedValue={this.state.language}
        style={[inputStyle, {top: this.props.top}]}
        onValueChange={(itemValue, itemIndex) => {
            if(itemValue != 0){
                this.setState({language: itemValue})
            }
        }
        }>
        <Picker.Item label={"Select " + this.props.initialValue} value="0" />
        <Picker.Item label="Arsenal" value="ars" />
        <Picker.Item label="Aston Villa" value="ast" />
        <Picker.Item label="Bournemouth" value="brn" />
        <Picker.Item label="Brighton" value="bri" />
        <Picker.Item label="Burnley" value="bur" />
        <Picker.Item label="Chelsea" value="che" />
        <Picker.Item label="Crystal Palace" value="cry" />
        <Picker.Item label="Everton" value="evt" />
        <Picker.Item label="Leicester City" value="lei" />
        <Picker.Item label="Liverpool" value="liv" />
        <Picker.Item label="Manchester City" value="mnc" />
        <Picker.Item label="Manchester United" value="mnu" />
        <Picker.Item label="Newcastle United" value="nwc" />
        <Picker.Item label="Norwich City" value="nor" />
        <Picker.Item label="Sheffield United" value="she" />
        <Picker.Item label="Southampton" value="sth" />
        <Picker.Item label="Tottenham" value="tot" />
        <Picker.Item label="Watford" value="wat" />
        <Picker.Item label="West Ham" value="whm" />
        <Picker.Item label="Wolverhampton" value="wol" />
    </Picker>
    }
}
    
const inputStyle = {
    borderColor: 'black',
    borderWidth: 10,
    borderRadius: 10,
    backgroundColor: '#dedede',
    width: '70%',
    alignSelf: 'center',
    top: 460,
    fontSize: 20
  }