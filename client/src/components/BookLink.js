import React from 'react';


const BookLink = ({ id, onClick, children }) => (
  <a className="BookLink" onClick={ onClick } data-id={ id }>
    { children }
  </a>
);




export default BookLink;






