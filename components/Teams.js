import React from 'react';
import Realm from 'realm';

export class Teams extends React.Component {
    constructor(props){
        super(props);
        this.state = { realm: null };
    }

    componentWillMount(){
        Realm.open({
            schema: [{name: 'Teams', properties: {name: 'string'}   
            }]
        }).then(realm => {
            realm.write(() => {
                realm.create('Teams', {name: 'Wales'});
            });

            this.setState({ realm });
        });
    }
}