import React, { Component } from 'react';
import {connect} from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
   /* state = {
        persons: []
    }

    personAddedHandler = () => {

    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }*/

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        persons:state.persons
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        personAddedHandler:(name, age)=>dispatch({type:'PERSON_ADDER', personData:{name:name, age:age}}),
        personDeletedHandler:(id)=>dispatch({type:'PERSON_DELETE', personId:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
