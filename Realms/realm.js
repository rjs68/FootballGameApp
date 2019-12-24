import Realm from 'realm';

class TeamV2 extends Realm.Object {}
TeamV2.schema = {
    name: 'TeamV2',
    primaryKey: 'teamName',
    properties: {
        teamName: 'string',
        teamIconPath: {type: 'string', optional: true},
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
        team: {type: 'linkingObjects', objectType: 'TeamV2', property: 'players'}
    },
};

export default new Realm({schema: [TeamV2, Player]});