import { connect } from 'react-redux';
import Book from '../components/Book';
import { closeModal } from '../actions';


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
)(Book);








