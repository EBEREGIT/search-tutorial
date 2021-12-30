// search countries by name
const filterCountryByName = (
  name,
  countries,
  setResults,
  setSearchString,
  setSearchResult
) => {
  // clear search result if the search field is empty
  if (name === "") {
    setResults([]);
  }

  // discontinue if there is no search yet
  if (name === null || name === "" || countries === []) return;

  // clear the other search field and results if any
  setSearchString("");
  setSearchResult([]);

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

// search countries by name the right way
const searchCountryByName = (
  searchString,
  countries,
  setSearchResult,
  setFilterByName,
  setFilterByNameResults
) => {
  // clear search result if the search field is empty
  if (searchString === "") {
    setSearchResult([]);
  }

  // discontinue if there is no search yet
  if (searchString === null || searchString === "" || countries === []) return;

  // // clear the other search field and results if any
  setFilterByName("");
  setFilterByNameResults([]);

  // empty the previous search array if any
  setSearchResult([]);
  let results = [];

  // create a regular expression pattern for the search string
  const pattern = new RegExp(searchString, "gi");

  // loop through all countries
  for (const country of countries) {
    const countryName = country.countryName;

    // check if the search word or character matches
    if (pattern.test(countryName)) {
      results.push(country);
    }
  }

  setSearchResult(results);
};

export { filterCountryByName, searchCountryByName };
