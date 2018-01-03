import React from 'react';


const Search = ({ search }) => {
  return (
    <form onSubmit={ search }>
      <div className="input-group">
        <input name="q" type="text" className="form-control" placeholder="Search for books..."/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </span>
      </div>
    </form>
  );
};




export default Search;








