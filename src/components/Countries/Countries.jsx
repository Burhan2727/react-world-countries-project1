import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  //   visited flags part.....................
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // visited part,, to Increase total visited countries and count part.......
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <div>
        <h3>Total Visited Countries: {visitedCountries.length}</h3>

        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}> {country.name.common} </li>
        ))}
      </div>
      <div className="visited-flags-container">
        <h3>Total Visited Flags: {visitedFlags.length} </h3>
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
