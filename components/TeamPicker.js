import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import realm from '../Realms/realm';

let teamObjects;
let teamNames = [];
    
export class TeamPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teamNumber: 0
        }

        realm.write(() => {
            realm.deleteAll();
            realm.create('TeamV3', {teamName: 'Algeria', players: []});
            realm.create('TeamV3', {teamName: 'Argentina', players: []});
            realm.create('TeamV3', {teamName: 'Australia', players: []});
            realm.create('TeamV3', {teamName: 'Belgium', players: []});
            realm.create('TeamV3', {teamName: 'Brazil', players: []});
            realm.create('TeamV3', {teamName: 'Cameroon', players: []});
            realm.create('TeamV3', {teamName: 'Canada', players: []});
            realm.create('TeamV3', {teamName: 'Chile', players: []});
            realm.create('TeamV3', {teamName: 'China', players: []});
            realm.create('TeamV3', {teamName: 'Colombia', players: []});
            realm.create('TeamV3', {teamName: 'Cote D\'Ivoire', players: []});
            realm.create('TeamV3', {teamName: 'Ecuador', players: []});
            realm.create('TeamV3', {teamName: 'England', players: []});
            realm.create('TeamV3', {teamName: 'Finland', players: []});
            realm.create('TeamV3', {teamName: 'France', players: []});
            realm.create('TeamV3', {teamName: 'Germany', players: []});
            realm.create('TeamV3', {teamName: 'Italy', players: []});
            realm.create('TeamV3', {teamName: 'Jamaica', players: []});
            realm.create('TeamV3', {teamName: 'Japan', players: []});
            realm.create('TeamV3', {teamName: 'Mexico', players: []});
            realm.create('TeamV3', {teamName: 'Netherlands', players: []});
            realm.create('TeamV3', {teamName: 'New Zealand', players: []});
            realm.create('TeamV3', {teamName: 'Nigeria', players: []});
            realm.create('TeamV3', {teamName: 'Northern Ireland', players: []});
            realm.create('TeamV3', {teamName: 'Portugal', players: []});
            realm.create('TeamV3', {teamName: 'Republic of Ireland', players: []});
            realm.create('TeamV3', {teamName: 'Russia', players: []});
            realm.create('TeamV3', {teamName: 'Scotland', players: []});
            realm.create('TeamV3', {teamName: 'South Korea', players: []});
            realm.create('TeamV3', {teamName: 'Spain', players: []});
            realm.create('TeamV3', {teamName: 'Uruguay', players: []});
            realm.create('TeamV3', {teamName: 'USA', players: []});
            realm.create('TeamV3', {teamName: 'Wales', players: []});
        });

        teamObjects = realm.objects('TeamV3');
        for(let t of teamObjects) {
            teamNames.push(t.teamName);
        }
        this.props.firstTeam({team: teamNames[this.props.teamNumber]});
        this.addTeam = this.addTeam.bind(this);
      }
    
    addTeam(){
        this.props.nextTeam({team: teamNames[this.props.teamNumber]})
    }
      
    render() {
    return <TouchableOpacity onPress={this.addTeam} style={inputStyle}>
            <View >
                <Text style={textStyle}>{this.props.team}</Text>
            </View>
        </TouchableOpacity>
    }
}
    
const inputStyle = {
    top: '45%'
  }

const textStyle = {
    fontFamily: 'sans-serif',
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
    textShadowColor: 'red',
    textShadowRadius: 100
}