// search countries by name
const filterCountryByName = (name, countries, setResults) => {
  // clear search result if the search field is empty
  if (name === "") {
    setResults([]);
  }

  // discontinue if there is no search yet
  if (name === null || name === "" || countries === []) return;

  // empty the previous search array if any
  const searchResult = [];
  const data = name.toLowerCase();

  // loop through all countries
  for (const country of countries) {
    const countryName = country.countryName.toLowerCase();

    // check if the search word or character matches
    if (
      [...countryName].includes(data) ||
      countryName === data ||
      countryName.split(" ").includes(data)
    ) {
      searchResult.push(country);
    }
  }

  setResults(searchResult);
};

export { filterCountryByName };
