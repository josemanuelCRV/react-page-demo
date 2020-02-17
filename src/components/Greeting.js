import React, {Component} from 'react';

// import other components in this component
import MyComponent from './MyComponent';
import Contact from './Contact';


// wrap greeting logic
function greeting(name, age){
    var msj = (
    <div>
      <h2>Welcome {name} to React Github-Page</h2>
      <h4>{age}</h4>
    </div>
    );
    return msj;
  }

// wrap login fullinks logic 
function fullinks(){
    var link_msg = (
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    );
    return link_msg;
  }


  
//------------------------//
// Greeting Class
// - embed two other components 
//------------------------//
class Greeting extends Component{
    
    render(){
        var name = "friend"
        var age = "2020";

        return (
            <div className="greeting-container">

                {/* greeting content */}
                <div className="componentes">
                { greeting(name, age) }
                { fullinks() }
                </div>

                {/* MyComponent section */}
                <section className="componentes">
                <MyComponent/>
                </section>

                {/* Contact section */}
                <section className="contact">
                    <Contact/>
                    <Contact/>
                    <Contact/>
                </section>

            </div> /* End greeting-container */
        );
    } /* End render */ 

}
export default Greeting;
