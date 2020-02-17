import React from 'react'

const Imagen = (props) => {

    const { largeImageURL, likes, previewURL, tags, views } = props.imagen;

    return (
        // Card to display response.
        <div className="col-12 col-sm-6 col-med-4 col-lg-3 mb-4">  
            <div className="card"> 
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body"> 
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <p className="card-text text-muted">{tags}</p>
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn-block"> Ver imagen </a>
                </div>
            </div>
        </div>
        
    )
}
export default Imagen;