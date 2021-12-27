import React from "react";

export default function Country(props) {
  // props
  const country = props.country;

  return (
    <div key={country.id} id="country">
      <aside>
        <section id="name_and_button">
          {/* name */}
          <h1>{country.countryName + " (" + country.countryCode + ")"}</h1>
        </section>

        {/* other details */}
        <p><i>Active Cases:</i> {country.activeCases}</p>
        <p><i>Daily Confirmed:</i> {country.dailyConfirmed}</p>
        <p><i>Daily Deaths:</i> {country.dailyDeaths}</p>
        <p><i>Total Confirmed:</i> {country.totalConfirmed}</p>
        <p><i>Total Critical:</i> {country.totalCritical}</p>
        <p><i>Total Deaths:</i> {country.totalDeaths}</p>
        <p><i>Total Recovered:</i> {country.totalRecovered}</p>
      </aside>
    </div>
  );
}
