import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/bootstrap.css';
import Searcher from './components/Searcher'
import Results from './components/Results'


class App extends Component{

  state = {
    termino : '',
    imagenes : [],
    page : ''
  }

  //scroll to Top after pagination event. 
  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'end');
  }

  //go to previous page of results.
  previousPage = () => {
    //read current page state
    let page = this.state.page;
    //if first page, break.
    if(page === 1) return null;  
    // else, rest 1 to current page.
    page -= 1;
    //add new page value to stage.
    this.setState({
      page
    }, () => { //callback 
      this.requestApi(); //new request.
      this.scroll();  //go Top.
    });
    console.log(page);
  }

  //go to next page of results.
  nextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState({
      page
    }, () => {
      this.requestApi();
      this.scroll();
    });
    console.log(page);
  }

  //Fetch Promise. Store response in state
  requestApi = () => {
    const host = 'https://pixabay.com/api';
    const apiKey = '15282361-16a29223e4df71ccde421c8ef';
    const query = this.state.termino;
    const filter = 'per_page=30';
    const page = this.state.page;
    const url = `${host}/?key=${apiKey}&q=${query}&${filter}&page=${page}`;
    console.log(url);
    fetch(url)
      .then(response => response.json() )
      .then(resultado => this.setState({ imagenes : resultado.hits }) ) 
  }

  //retrieve input passed by handleSubmit 
  dataToSearch = (termino) => {
    console.log(termino);
    //store input in state 
    this.setState({
      termino : termino, 
      //show first page by default 
      page: 1 
    }, () => {
      //callback request 
      this.requestApi();
    })
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />   
        </header>
        {/** display search component */}
        <div className="app container">
          <div className='jumbotron'>
            <p className='lead text-center'>Buscador de imágenes</p>
            <Searcher 
              dataToSearch = {this.dataToSearch} // le pasa al hijo los datos
            />
          </div>
          {/** display results component*/}
          <Results 
            imagenes = {this.state.imagenes}
            previousPage = {this.previousPage}
            nextPage = {this.nextPage}
          />
        </div>
      </div>
    );

  }
}
export default App;

  /**
   * Workflow:
   * ===================
   *  1º App.class 
   *      - El Buscador(Padre)
   *      - pasa al componente Searcher dataToSearch.
   *  
   *  2º Comp.Searcher (Hijo)
   *      - Usuario realiza una búsqueda
   *      - Obtiene los datos (handleSubmit) del input.
   *      - Con Ref lee los datos ingresados.
   *      - Con funcion props devuelve los datos al Padre.
   *  
   *  3º App.class - El Buscador(Padre)
   *      - Recibe el props devuelto por handleSubmit.
   *      - Sobrescribe el estado con los datos recibidos.
   *      - Cuando finaliza de sobrescribir state, hace un Callback.
   *      - Callback ejecuta la función de requestApi.
   *      - requestApi realiza busqueda y guarda en state la respuesta.
   *      - Se inyecta componente Result.
   *      - En Results inyectado guarda el state a en variables.
   *        
   *  4º Comp.Result.
   *      - Results accede a las variables mediante props.
   *      - Recupera el valor de la respuesta que estaba almacenada en state.
   *      - Con funcion .map se itera respuesta.
   *      - Se inyecta Componente Imagen
   *      - Cada resultado de la iteración se inyecta en el componente Imagen.
   *      - En Imagen inyect se pasan dos params, uniqueID & resultado de iteración actual.   
   *  
   *  5º Comp.Imagen.
   *      - El comp Imagen crea un Card.
   *      - Accede con props a las vars que se pasaron desde Imagen (Result).
   *      - Guarda en variables determinadas keys del obejeto respuesta.
   *      - Infla la card con los valores recuperados de las keys.   
   *      - Termina Comp Imagen y continua por Results.
   * 
   *   6º Comp.Result.
   *      - Una vez realizadas todas las iteraciones.
   *      - Se inyecta el comp. Pagination.
   *      - Accde con props a prev&next vars que se inyectaron en Results.
   *      - Guarda el valor de estas vars.
   * 
   *    7º Comp.Pagination
   *      - Renderiza dos botones.
   *      - Cada boton tiene un evento onClick, 
   *      - El evento onClick llama a Funciones Prev&Next de la clase App.
   *      - Continua la accion por la funcion de la clase App que se invoque.
   *    
   *     8º App class
   *      - funcion previousPage()
   *          > lee el estado actual
   *          > comprueba que no estar en al primera pag antes de retroceder.
   *          > resta -1 a la pag actual.
   *          > guarda el valor de la pag atual en state.
   *          > Invoca a requestApi().
   *          > requestApi() carga el nuevo estado de la pag y realiza la busqueda.
   *          > al terminar ciclo de requestApi, se invoca a scroll().
   *          > scroll mueve el scroll a una posicion de la vista. (top).
   * 
   *      - funcion nextPage()
   *          > lee el estado actual
   *          > suma +1 a la pag actual.
   *          > guarda el valor de la pag atual en state.
   *          > Invoca a requestApi().
   *          > requestApi() carga el nuevo estado de la pag y realiza la busqueda.
   *          > al terminar ciclo de requestApi, se invoca a scroll().
   *          > scroll mueve el scroll a una posicion de la vista. (top).
   */