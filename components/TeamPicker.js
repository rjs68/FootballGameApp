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
        onValueChange={(itemValue) => {
            if(itemValue != 0){
                this.setState({language: itemValue});
                this.props.setTeam(itemValue);
            }
        }
        }>
        <Picker.Item label={"Select " + this.props.initialValue} value="0" />
        <Picker.Item label="Arsenal" value="Arsenal" />
        <Picker.Item label="Aston Villa" value="Aston Villa" />
        <Picker.Item label="Bournemouth" value="Bournemouth" />
        <Picker.Item label="Brighton" value="Brighton" />
        <Picker.Item label="Burnley" value="Burnley" />
        <Picker.Item label="Chelsea" value="Chelsea" />
        <Picker.Item label="Crystal Palace" value="Crystal Palace" />
        <Picker.Item label="Everton" value="Everton" />
        <Picker.Item label="Leicester City" value="Leicester City" />
        <Picker.Item label="Liverpool" value="Liverpool" />
        <Picker.Item label="Manchester City" value="Manchester City" />
        <Picker.Item label="Manchester United" value="Manchester United" />
        <Picker.Item label="Newcastle United" value="Newcastle United" />
        <Picker.Item label="Norwich City" value="Norwich City" />
        <Picker.Item label="Sheffield United" value="Sheffield United" />
        <Picker.Item label="Southampton" value="Southampton" />
        <Picker.Item label="Tottenham" value="Tottenham" />
        <Picker.Item label="Watford" value="Watford" />
        <Picker.Item label="West Ham" value="West Ham" />
        <Picker.Item label="Wolverhampton" value="Wolverhampton" />
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