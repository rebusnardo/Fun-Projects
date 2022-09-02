import axios from "axios";
import React, { useState } from "react";
import App from "../App";

function Api() {
  const [state, setState] = useState([]);

  const getApi = () => {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
      )
      .then((response) => {
        console.log(response);
        const car = response.data.Results;

        setState(car);
        console.log(car);
      });
  };

  let mapped = state.map((item) => {
    return <App auto={item} key={item.Mfr_ID} />;
  });
  console.log(mapped);

  console.log(state);

  //state.map((person) => console.log(person.id));

  return (
    <div>
      <button onClick={getApi}>OnClick</button>
      <ul></ul>
    </div>
  );
}

export default Api;
