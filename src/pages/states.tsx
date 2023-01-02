import { useEffect, useState } from "react";
import Card from "../components/Card";
import State from "../Model/state";

const States = () => {
  let [mount, setMount] = useState<boolean>(false);
  const [states, setState] = useState<State[]>();
  const [filter, setFilters] = useState<State[]>();


  const fecthStates = async () => {
    try {
      fetch("https://nigerian-states-and-lga.vercel.app/", {
        method: "GET",
      }).then(async (response) => setState(await response.json()));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    fecthStates();
  }, [mount]);

  
//capitalize first letter of any query to fit data model
const capitalizeStr = (str: string): string => {
  let orr_str = str;
  let new_str = ""
  let dash = str.indexOf("-")
  let rep = orr_str.charAt(0).toUpperCase();
  //
  new_str = orr_str.replace(orr_str[0], rep)
  let rep_dash = new_str.charAt(dash + 1).toUpperCase();
  //
  if (dash) {
    new_str = new_str.replace(new_str[dash + 1], rep_dash);
  } 
  return new_str;
};

  return (
    <>
      <div className="filter-box">
        <input
          type="text"
          placeholder="limit"
          onChange={(e) => {
            let value = e.currentTarget.value
            setFilters(states?.filter(st => st.name === capitalizeStr(value)))
          }}
        />
        <div className="bullets">
          <span
            onClick={() => {
              let st = states?.filter((st) => st.isCapital === true);
              if (st !== undefined) setFilters(st);
            }}
          >
            Capital
          </span>
          <select
            name="region"
            onChange={(e) => {
              let selected = e.currentTarget.value;
              if (selected !== "all") {
                fetch(
                  `https://nigerian-states-and-lga.vercel.app/state/region/?region=${selected}`,
                  {
                    method: "GET",
                  }
                ).then(async (response) => setFilters(await response.json()));
              }
              if (filter && filter.length > 0 && selected === "all")
                setFilters([]);
            }}
          >
            <option value="all">region</option>
            <option value="southeast">SouthEast</option>
            <option value="southwest">SouthWest</option>
            <option value="northcentral">NorthCentral</option>
            <option value="northeast">NorthEast</option>
            <option value="northwest">NorthWest</option>
          </select>
        </div>
      </div>
      <div className="container">
        {!filter || filter.length < 1
          ? states?.map((state) => {
              return (
                <Card
                  code={state.code}
                  name={state.name}
                  description={state.description}
                />
              );
            })
          : filter?.map((f) => {
              return (
                <Card code={f.code} name={f.name} description={f.description} />
              );
            })}
      </div>
    </>
  );
};

export default States;

/**useEffect(() => {
    let input = inputRef.current as HTMLInputElement;
    input.addEventListener("focusin", () => {
      setState([]);
    });

    return () => {
      input.removeEventListener("focusin", () => {
        setState([]);
      });
    };
  }, []); */
