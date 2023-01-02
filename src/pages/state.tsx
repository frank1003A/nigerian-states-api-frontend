import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import WalkThrough from "../components/WalkThrough";
import STATE from "../Model/state";

const State = () => {
  let { name } = useParams();
  const [states, setStates] = useState<STATE[]>();
  const [stateParams, setStateParams] = useState<STATE>();
  const [viewLGAS, setViewLGAS] = useState<boolean>();

  const fecthStates = async () => {
    try {
      fetch("http://localhost:3000/", {
        method: "GET",
      }).then(async (response) => setStates(await response.json()));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthStates();
  }, []);

  const getCurrentState = () => {
    let currState = states?.filter((st) => st.name === name);
    if (currState !== undefined) setStateParams(currState[0]);
  };

  useEffect(() => {
    getCurrentState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states]);

  return (
    <div className="container">
      <div className="state-container">
       <div className={viewLGAS ? "stf mx slide_right" : "stf max slide_left"}>
       <Button text="LGA" onClick={() => setViewLGAS(!viewLGAS)} />
        <WalkThrough
          name={stateParams?.name}
          code={stateParams?.code}
          capital={stateParams?.capital}
          description={stateParams?.description}
          direction={stateParams?.direction}
          lgas={stateParams?.lgas}
        />
       </div>
        <div className={viewLGAS ? "info-rack" : "info-rack hidden"}>
          {stateParams?.lgas.map((st) => {
            return <p className="info-slot">{st}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default State;

/**<TourCard name={name as string} code={stateParams?.code as string} description={stateParams?.description} /> */
/**<div className="info-rack">
        <label className="info-slot">{stateParams?.name} has {stateParams?.lgas.length} local goverments</label>
        <p className="info-slot">Capital is {stateParams?.capital}</p>
      </div> */
