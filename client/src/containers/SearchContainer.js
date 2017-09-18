import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { getBooks } from '../actions';
import serialize from 'form-serialize';


const SearchContainer = ({ search }) => <Search onClick={ search } />


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
      console.log(form);
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
)(SearchContainer);




