import Realm from 'realm';

class TeamV3 extends Realm.Object {}
TeamV3.schema = {
    name: 'TeamV3',
    primaryKey: 'teamName',
    properties: {
        teamName: 'string',
        teamIconPath: {type: 'int', optional: true},
        players: 'Player[]'
    },
};

class Player extends Realm.Object {}
Player.schema = {
    name: 'Player',
    primaryKey: 'playerid',
    properties: {
        playerid: 'int',
        iconPath: {type: 'string', optional: true},
        name: 'string',
        age: 'int',
        team: {type: 'linkingObjects', objectType: 'TeamV3', property: 'players'}
    },
};

export default new Realm({schema: [TeamV3, Player]});