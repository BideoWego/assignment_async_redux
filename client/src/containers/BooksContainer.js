import React from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books';


const BooksContainer = ({ books }) => <Books books={ books } />;


const mapStateToProps = state => {
  return {
    books: state.books,
    isFetching: state.isFetching
  };
};


const mapDispatchToProps = dispatch => {
  return {};
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);







