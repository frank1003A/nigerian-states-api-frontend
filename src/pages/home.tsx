import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HOME = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="col center font">
      <h4>Nigerian states, capital and local governments</h4>
      <Button text="Start Tour" onClick={() =>  navigate("/states")}/>
      </div>
    </div>
  )
};

export default HOME;
