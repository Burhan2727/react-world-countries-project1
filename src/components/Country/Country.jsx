import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = ()=>{
        // toogling basic system--------------
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // toogling second system--------------

        // setVisited(visited ? false : true)

        // toogling third system--------------

        setVisited(!visited)
        handleVisitedCountries(country)
        
    }
    return (
        <div className={`country ${visited ? "country-visited" : "country-not-visited"}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Common Name: {country.name.common}</h3>
            <h3>Population: {country.population.population}</h3>
            <p> {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}> {visited ? "Visited" : "Not Visited"} </button>
            <button onClick={()=> handleVisitedFlag(country.flags.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;