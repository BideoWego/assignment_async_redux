import React from 'react';


const Book = ({ book, isOpenModal, onCloseModalClick }) => (
  isOpenModal ?
    <div className="Book jumbotron">
      <a className="text-danger" onClick={ onCloseModalClick }>&times;</a>
      <img src={ book.image } alt="" className="img-responsive" />
      <h1 className="display-3">{ book.title }</h1>
      <p className="lead">Author: { book.author }</p>
      <p className="lead">Publication Date: { book.id }</p>
      <p>ID: { book.id }</p>
      <hr className="my-4"/>
      <p className="lead">Description: { book.description }</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" role="button" href={ book.url }>
          View this book's reviews on GoodReads
        </a>
      </p>
    </div> : null
);






export default Book;






