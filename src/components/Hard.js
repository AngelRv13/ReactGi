import React, { Component } from 'react'

class Hard extends Component {
    constructor(props) {
        super(props);
    }
   state = { 
        person : {

        } }
    render() { 
        return (this.props.people.map(element=>(
            <div className='personInfo'>
                  <h1>My name is {element.name}</h1>
                    <h2> I am {element.age} years old</h2>
                    <h3>I am a {element.occupation}</h3>
            </div>
          
        )

        ) );
    }
}
 
export default  Hard;