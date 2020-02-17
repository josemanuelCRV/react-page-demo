import React from 'react'

// si no recibe argumentos props, puede ir sin parentesis.

const Pagination = props => {

    return (
        <div className="py-3">
            <button type="button" className="btn btn-info mr-1" onClick={props.previousPage}>  &larr; Anterior </button>
            <button type="button" className="btn btn-info mr-1" onClick={props.nextPage}> Siguiente &rarr; </button>
        </div>
    )
}
export default Pagination;