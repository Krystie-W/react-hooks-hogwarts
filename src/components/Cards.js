import React, { useState } from "react";
import Pigs from "./Pigs";
import Filters from "./Filters";

function Cards ({ hogs }) {
const [filter, setFilter] = useState(true);
const [sort, setSort] = useState("All");

function handleFilter (event) {
    const value = event.target.value;
    if (value === 'false') {
        setFilter(!value);
    } else setFilter(!!value)
}


function handleSort (event) {
    setSort(event.target.value);
}

const finalPigs = hogs
    .filter((item) => (item.greased === filter))
    .sort((a, b) => {
            if (sort === "name" ) {
                return ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        } else if (sort === "weight") {
                    return ((a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0))
                } else 
                    return true 
    });

  return (
    <>
      <Filters filter={filter} handleFilter={handleFilter} handleSort={handleSort}/>
        <ul className="ui grid container">
                {finalPigs.map((hog) => (
                    <Pigs key={hog.name.substring(0, 4)} allHogData={hog} />
                ))}
        </ul>
    </>
  );
};

export default Cards;