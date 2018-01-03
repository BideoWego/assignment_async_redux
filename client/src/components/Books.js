import React from 'react';
import _ from 'lodash';
import BookLink from './BookLink';


function createDecks(books, onBookLinkClick) {
  let decks = <p className="text-danger">No books...</p>;

  if (books.length) {
    let bookElements = books
      .map(book => <BookCard key={ book.id } book={ book } onBookLinkClick={ onBookLinkClick } />);
    let chunks = _.chunk(bookElements, 4);
    decks = chunks.map((chunk, index) => (
      <div key={ index } className="card-deck">{ chunk }</div>
    ));
  }

  return decks;
}


const BookCard = ({ book, onBookLinkClick }) => (
  <div className="BookCard card">
    <img className="card-img-top" src={ book.image } alt="Card cap" />
    <div className="card-body">
      <h4 className="card-title">
        <BookLink id={ book.id } onClick={ onBookLinkClick }>
          Title: { book.title }
        </BookLink>
      </h4>
      <p className="card-text">ID: { book.id }</p>
      <p className="card-text">Author: { book.author }</p>
      <p className="card-text">Publication Date: { book.author }</p>
    </div>
  </div>
);



const Books = ({ books, isFetching, onBookLinkClick }) => {
  let decks = createDecks(books, onBookLinkClick);
  let loading = <p>Loading...</p>;

  return (
    <div className="Books">
      <h2>Books</h2>
      { isFetching ? loading : decks }
    </div>
  );
};




export default Books;






