import { connect } from 'react-redux';
import Search from '../components/Search';
import { getBooks } from '../actions';
import serialize from 'form-serialize';


const mapStateToProps = state => {
  return {
    onClick: state.onClick
  };
};


const mapDispatchToProps = dispatch => {
  return {
    search: (e) => {
      e.preventDefault();
      let form = serialize(e.target, { hash: true });
      console.log(e.target);
      if (form.q) {
        dispatch(getBooks(form.q));
      }
      return false;
    }
  };
};




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);




