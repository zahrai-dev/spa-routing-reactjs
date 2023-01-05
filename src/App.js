import React, { Component } from 'react';
import {BrowserRouter, Route, Routes, Link, useParams} from 'react-router-dom';

import './App.css';

function Home(){
    return <h2> Halaman Home </h2>
}

function ListView(){  
    return(
      <React.Fragment>
        <h2> Semua User </h2>
              <ul>
                <Link to='/user/Naruto'> Naruto </Link> <br/>
                <Link to='/user/Sasuke'> Sasuke </Link>
              </ul>
      </React.Fragment>

      /* <div>
        <h2> Semua User </h2>
              <ul>
                <Link to='/user/Naruto'> Naruto </Link> <br/>
                <Link to='/user/Sasuke'> Sasuke </Link>
              </ul>
      </div> */
    ) 
}

function DetailView(){
  let { name } = useParams();
  return <h2>Ini Halaman { name }</h2>
}

function NoMatch(){  
  return  <h2> 404, Halaman tidak ditemukan. </h2>
}

class App extends Component {
  render(){
    return(
    <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/users'> User </Link></li>
          </nav>
          <main>
            <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/users' exact element={<ListView/>} />
              <Route path='/user/:name' exact element={<DetailView/>} />
              <Route path='*' element={<NoMatch/>} />
            </Routes>
          </main>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
