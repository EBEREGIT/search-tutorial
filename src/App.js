import { useContext, useState } from "react";
import Student from "./components/Student";
import { HatchContext } from "./context/hatchways";
import {
  filterStudentsByName,
  filterStudentsByTag,
} from "./Helpers/HatchHelper";
import "./styles/App.scss";

function App() {
  // context
  const { hatchLoading, hatches } = useContext(HatchContext);

  // state
  const [filterByName, setFilterByName] = useState("");
  const [filterByNameResults, setFilterByNameResults] = useState([]);
  const [filterByTag, setFilterByTag] = useState("");
  const [filterByTagResults, setFilterByTagResults] = useState([]);
  const searchResult = [...filterByTagResults, ...filterByNameResults];

  return (
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
            filterStudentsByName(
              e.target.value,
              hatches,
              setFilterByNameResults
            )
          }
        />

        {/* search by tag */}
        <input
          name="filterByTag"
          value={filterByTag}
          placeholder="Search by tag"
          onChange={(e) => setFilterByTag(e.target.value)}
          onKeyUp={(e) =>
            filterStudentsByTag(e.target.value, hatches, setFilterByTagResults)
          }
        />
      </header>

      {/* return the data collected if there are. Else return "No students found" */}
      <main>
        {searchResult && searchResult.length
          ? searchResult.map((student) => <Student student={student} />)
          : hatchLoading === "processing"
          ? "Fetching Data..."
          : hatchLoading === "found" && hatches && hatches.length
          ? hatches.map((student) => <Student student={student} />)
          : "No Student Found!"}
      </main>
    </div>
  );
}

export default App;
