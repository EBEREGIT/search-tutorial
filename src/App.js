import { useContext, useState } from "react";
import Country from "./components/Country";
import { HatchContext } from "./context/hatchways";
import { filterCountryByName } from "./Helpers/HatchHelper";
import "./styles/App.scss";

function App() {
  // context
  const { hatchLoading, hatches } = useContext(HatchContext);

  // state
  const [filterByName, setFilterByName] = useState("");
  const [filterByNameResults, setFilterByNameResults] = useState([]);

  return (
    <>
      <h2>Search Tutorial</h2>
      <div id="container">
        {/* search field */}
        <header>
          {/* search by name */}
          <input
            name="filterByName"
            value={filterByName}
            placeholder="Search by name"
            onChange={(e) => setFilterByName(e.target.value)}
            onKeyUp={(e) =>
              filterCountryByName(
                e.target.value,
                hatches,
                setFilterByNameResults
              )
            }
          />
        </header>

        {/* return the data collected if there are. Else return "No country found" */}
        <main>
          {filterByNameResults && filterByNameResults.length
            ? filterByNameResults.map((country) => (
                <Country country={country} />
              ))
            : hatchLoading === "processing"
            ? "Fetching Data..."
            : hatchLoading === "found" && hatches && hatches.length
            ? hatches.map((country) => <Country country={country} />)
            : "No country Found! Check your Internet Connection!"}
        </main>
      </div>
    </>
  );
}

export default App;
