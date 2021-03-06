import { connect } from 'react-redux';
import Books from '../components/Books';
import { getBook } from '../actions';


const mapStateToProps = state => {
  return {
    books: state.books,
    isFetching: state.isFetching
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onBookLinkClick: (e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      const id = e.target.getAttribute('data-id');
      if (id !== undefined) {
        dispatch(getBook(id));
      }
      return false;
    }
  };
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);







