import React, { Component } from 'react';
import BooksContainer from './containers/BooksContainer';
import SearchContainer from './containers/SearchContainer';
import BookContainer from './containers/BookContainer';


class App extends Component {
  render() {
    const appName = 'Hello Books!'
    document.title = appName;
    return (
      <main id="app" className="App container">
        <h1>{ appName }</h1>
        <SearchContainer />
        <BookContainer />
        <BooksContainer />
      </main>
    );
  }
}




export default App;





