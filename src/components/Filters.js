import React from "react";

function Filters ({ handleFilter, handleSort }) {

    
  return (
   <>
    <h2>Filters</h2>
    <form className="ui form">
    <div >
        <select name="filter" onChange={handleFilter}>
        <option value="true">Greased</option>
        <option value="false">Un-greased</option>
        </select>
    </div><br></br>
    <div>
        <select name="filter" onChange={handleSort}>
        <option value="All">Sort by...</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
        </select>
    </div>
    </form>
   <br></br><br></br>
   </>
  )
};

export default Filters;