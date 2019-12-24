import React from 'react';
import { Picker } from 'react-native';
import realm from '../Realms/realm';
    
export class TeamPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

        realm.write(() => {
            realm.deleteAll();
            realm.create('TeamV2', {teamName: 'Wales', players: []});
            realm.create('TeamV2', {teamName: 'Germany', players: []});
            realm.create('TeamV2', {teamName: 'England', players: []});
            realm.create('TeamV2', {teamName: 'France', players: []});
            realm.create('TeamV2', {teamName: 'Brazil', players: []});
            realm.create('TeamV2', {teamName: 'Argentina', players: []});
            realm.create('TeamV2', {teamName: 'Spain', players: []});
            realm.create('TeamV2', {teamName: 'Netherlands', players: []});
            realm.create('TeamV2', {teamName: 'Portugal', players: []});
            realm.create('TeamV2', {teamName: 'Belgium', players: []});
        });
      }
      
    render() {
    let teamObjects = realm.objects('TeamV2');
    let teamNames = [];
    for(let t of teamObjects) {
        teamNames.push(t.teamName);
    }
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
        <Picker.Item label="Select your team..."value="0" />
        <Picker.Item label={teamNames[0]} value={teamNames[0]} />
        <Picker.Item label={teamNames[1]} value={teamNames[1]} />
        <Picker.Item label={teamNames[2]} value={teamNames[2]} />
        <Picker.Item label={teamNames[3]} value={teamNames[3]} />
        <Picker.Item label={teamNames[4]} value={teamNames[4]} />
        <Picker.Item label={teamNames[5]} value={teamNames[5]} />
        <Picker.Item label={teamNames[6]} value={teamNames[6]} />
        <Picker.Item label={teamNames[7]} value={teamNames[7]} />
        <Picker.Item label={teamNames[8]} value={teamNames[8]} />
        <Picker.Item label={teamNames[9]} value={teamNames[9]} />
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