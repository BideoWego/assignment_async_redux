import React from 'react';
import { connect } from 'react-redux';
import Books from '../components/Books';
import { getBooks } from '../actions';


class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }


  render() {
    const { books } = this.props;
    return <Books books={ books } />;
  }
}


const mapStateToProps = state => {
  return {
    books: state.books,
    isFetching: state.isFetching
  };
};


const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => {
      dispatch(getBooks());
    }
  };
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);







