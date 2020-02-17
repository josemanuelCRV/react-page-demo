import React, { Component } from 'react'

class Searcher extends Component {

    //Ref imput Reader
    searcherRef = React.createRef();
    
    //Handle form submit event funcion 
    handleSubmit = (e) => {
        e.preventDefault(); //hide query in browser 
        //retrieve the form input  
        const data_input = this.searcherRef.current.value;
        //send imput to Main App   
        this.props.dataToSearch(data_input);
    }

    //show form
    render() {
        return (  
            <form onSubmit={this.handleSubmit} >
                <div className='row'>                   
                    <div className='form-group col-md-8'>
                        <input ref={this.searcherRef} type='text' className="form-control 
                        form-control-lg" placeholder="Busca tu imagen. Ejemplo: Futbol" />
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' className="btn btn-lg 
                        btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        )
    }
}
export default Searcher;

 

