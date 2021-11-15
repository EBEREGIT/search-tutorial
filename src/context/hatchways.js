// external imports
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// create Hatch context to manage Hatch here
export const HatchContext = createContext();

export default function HatchContextProvider(props) {
  // set initial state
  const [hatchLoading, setLoading] = useState(null);
  const [hatches, setHatches] = useState([]);

  // make API call to get all the Hatches
  useEffect(() => {
    setLoading("processing");

    const method = "get",
      url = "https://api.hatchways.io/assessment/students";

    // get Hatchs
    axios({ url, method })
      .then((result) => {
        setHatches(result.data.students);
        setLoading("found");
      })
      .catch((error) => {
        error = new Error();
        setLoading("failed");
      });
  }, []);

  return (
    <HatchContext.Provider value={{ hatchLoading, hatches }}>
      {props.children}
    </HatchContext.Provider>
  );
}
