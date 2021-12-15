import React, { useState } from "react";

function Pigs ({ allHogData }) {
    const [clicked, setClicked] =useState(false);
    const [hide, setHide] = useState(true)

    function hidePig () {
        setHide(false)
    } 

    function revealPigInfo () {
        setClicked((clicked) => !clicked)
    }

    return (
      <>
        {hide && 
        <li className='ui eight wide column' onClick={revealPigInfo}>
            <div className="ui card">
            <h2>{allHogData.name}</h2>
                <img src={allHogData.image} className="ui centered medium bordered image" alt="" height="200" width="250"/>
                {clicked && 
                <div className="content">
                    <p><b>Greased?: </b> {allHogData.greased ? "Yes" : "No"}</p>
                    <p><b>Specialty: </b> {allHogData.specialty}</p>
                    <p><b>Weight: </b> {allHogData.weight}kg</p>
                    <p><b>Highest medal achieved: </b> {allHogData["highest medal achieved"]}</p>
                </div>
                }
                <button onClick={hidePig}>Hide Pig</button>
            </div>
        </li>
        }
        </>
    );
};

export default Pigs;