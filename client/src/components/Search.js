import React from 'react';


const Search = ({ onClick }) => {
  return (
    <form onSubmit={ onClick }>
      <div className="input-group">
        <input name="q" type="text" className="form-control" placeholder="Search for books..."/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit" role="button">
            Submit
          </button>
        </span>
      </div>
    </form>
  );
};




export default Search;








