import React, { Component } from 'react';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.jpg"
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import MovieDatails from './components/MovieDatails';

class App extends Component {
  render() {
    const name = "Dianna"

    const movies = [
      { id: 1, name: "O Poderoso Chefão", ano: "1972", genero: "Crime, Drama"},
      { id: 2, name: "Pulp Fiction", ano: "1995", genero: "Crime, Drama"},
      { id: 3, name: "O Senhor dos Anéis: O Retorno do Rei", ano: "2003", genero: "Aventura, Fantasia"},
      { id: 4, name: "Comer, Amar e Rezar", ano: "2010", genero: "Romance, Drama"},
      { id: 5, name: "Tropa de Elite", ano: "2007", genero: "Ação, Drama"},
      { id: 6, name: "Soul", ano: "2020", genero: "Animação"},
      { id: 7, name: "As Branquelas", ano: "2004", genero: "Comédia"},
      { id: 8, name: "Animais Fantásticos", ano: "2016", genero: "Fantasia"},
      { id: 9, name: "Piratas do Caribe: a Vigança de Salazar", ano: "2017", genero: "Aventura"},
      { id: 10, name: "Amahecer part 2", ano: "2012", genero: "Romance"},
  ]
    return (
      <div className="App">
          <h1>Seção 3</h1>
            <h3 >Images</h3>
          <div className='container-img'>
          <div><img src={img1} height="300" width="300" alt="" /></div>
          <div><img src={img2} height="300" width="300" alt="" /></div>
          </div>
          <div className='divisor'></div>
            <h3>Hook: useState</h3>
          <ManageData/>
          <div className='divisor'></div>
            <h3>Listas</h3>
          <div className='divisor'></div>
          <ListRender/>
          <div className='divisor'></div>
          <h3>Conditional</h3>
          <ConditionalRender/> 
          {/* props*/}
          <div className='divisor'></div>
          <h3>ShowUserName</h3>
          <ShowUserName name={name}/>
          {/*destructuring*/}
          <div className='divisor'></div>
          <h3>Detalhes do Filme</h3>
          <MovieDatails className="listmovie" name="Tudo em todo lugar a todo tempo" ano={2022} genero="Sci-fi" newMovie={true}/>
          {/*reaproveitando component*/}
          <MovieDatails className="listmovie" name="Titanic" ano={1998} genero="Romance" newMovie={false}/>
          <MovieDatails className="listmovie" name="A Origem" ano={2010} genero="Sci-fi" newMovie={false}/>
          {/*loop em array de objetos*/}
          {movies.map((movie)=>(
            <MovieDatails name={movie.name} ano={movie.ano} genero={movie.genero}/>))}
        </div>
    );
  }
}

export default App;
