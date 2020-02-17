import React, { Component } from 'react'
import Imagen from './Imagen';
import Pagination from './Pagination';

class Results extends Component {    

    showPicture = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0 ) return null;
        console.log(imagenes);
        return (
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    {imagenes.map(imagen => ( 
                       <Imagen 
                            key = {imagen.id}
                            imagen = {imagen}
                       /> 
                    ) ) }
                </div>
                <Pagination 
                    previousPage = {this.props.previousPage}
                    nextPage = {this.props.nextPage} 
                />
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <React.Fragment> 
                { this.showPicture() }        
            </React.Fragment>
        )
    }
}
export default Results;
