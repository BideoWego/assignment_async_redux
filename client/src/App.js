import React, { Component } from 'react';
import BooksContainer from './containers/BooksContainer';


class App extends Component {
  render() {
    const appName = 'Hello Books!'
    document.title = appName;
    return (
      <main className="App">
        <h1>{ appName }</h1>
        <BooksContainer />
      </main>
    );
  }
}




export default App;





