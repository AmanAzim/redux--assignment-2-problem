const initialState={
    persons: []
}

const Reducer=(state=initialState, action)=>{

    if(action.type==='PERSON_ADDER'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        }
        return{
            persons:state.persons.concat(newPerson)
        }
    }

    if(action.type==='PERSON_DELETE'){
        const newPersons=state.persons.filter( person=> person.id!==action.personId );
        return{
            persons:newPersons
        }
    }

    return state;
}

export default Reducer;
