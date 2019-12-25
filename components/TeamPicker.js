import React from 'react';
import { Picker } from 'react-native';
import realm from '../Realms/realm';

let teamObjects;
let teamNames = [];
    
export class TeamPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

        realm.write(() => {
            realm.deleteAll();
            realm.create('TeamV3', {teamName: 'Wales', teamIconPath: require('../images/Flags/wales.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Germany', teamIconPath: require('../images/Flags/germany.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'England', teamIconPath: require('../images/Flags/england.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'France', teamIconPath: require('../images/Flags/france.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Brazil', teamIconPath: require('../images/Flags/brazil.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Argentina', teamIconPath: require('../images/Flags/argentina.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Spain', teamIconPath: require('../images/Flags/spain.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Netherlands', teamIconPath: require('../images/Flags/netherlands.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Portugal', teamIconPath: require('../images/Flags/portugal.jpg'), players: []});
            realm.create('TeamV3', {teamName: 'Belgium', teamIconPath: require('../images/Flags/belgium.jpg'), players: []});
        });

        teamObjects = realm.objects('TeamV3');
        for(let t of teamObjects) {
            teamNames.push(t.teamName);
        }
        this.props.nextTeam({team: teamNames[5]});
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