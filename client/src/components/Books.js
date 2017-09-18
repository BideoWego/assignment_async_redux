import React from 'react';
import _ from 'lodash';


// id
// pubDate
// title
// author
// image

const Book = ({ book }) => (
  <div className="Book card">
    <img className="card-img-top" src={ book.image } alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">Title: { book.title }</h4>
      <p className="card-text">ID: { book.id }</p>
      <p className="card-text">Author: { book.author }</p>
      <p className="card-text">Publication Date: { book.author }</p>
    </div>
  </div>
);



const Books = ({ books, isFetching }) => {
  let bookElements = books.map(book => <Book key={ book.id } book={ book } />);
  let chunks = _.chunk(bookElements, 4);
  let decks = chunks.map(chunk => (
    <div className="card-deck">{ chunk }</div>
  ));
  let loading = <p>Loading...</p>;

  return (
    <div className="Books">
      <h2>Books</h2>
      { isFetching ? loading : decks }
    </div>
  );
};




export default Books;






