import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { closeModal } from '../actions';


const BookContainer = ({ book, isOpenModal, onCloseModalClick }) => (
  <Book
    book={ book }
    isOpenModal={ isOpenModal }
    onCloseModalClick={ onCloseModalClick } />
);


const mapStateToProps = state => {
  return {
    book: state.book,
    isOpenModal: state.isOpenModal
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onCloseModalClick: () => {
      dispatch(closeModal());
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);








