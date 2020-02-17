import React, {Component} from 'react';
import {getCurrentDate} from '../utils/GetCurrentData.js'
//console.log(getCurrentDate())

class  Contact extends Component{

    render(){
        
        let contact_data = {
            data : ['josemanuelCRV', getCurrentDate()],
            commiter : 'josemanuelCRV',
            profile : 'https://github.com/josemanuelCRV',
        }

        return (
            <div className = "contact-component">
            <h2>Contact component</h2>    
            <h5>{'Commiter: ' + contact_data.commiter } </h5>
            <h5>{'Profile: ' + contact_data.profile } </h5>
            
            <ol>
                {
                    contact_data.data.map((contact, i) => {
                        console.log(contact);
                        return (
                            <li key={i}>
                                { contact }
                            </li>
                        )
                    })   
                }
            </ol>

            <hr/> 
            </div>
        );
    }


}

export default Contact;