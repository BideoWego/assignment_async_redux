import React, { Component } from 'react';
import BooksContainer from './containers/BooksContainer';
import SearchContainer from './containers/SearchContainer';


class App extends Component {
  render() {
    const appName = 'Hello Books!'
    document.title = appName;
    return (
      <main className="App container">
        <h1>{ appName }</h1>
        <SearchContainer />
        <BooksContainer />
      </main>
    );
  }
}




export default App;





