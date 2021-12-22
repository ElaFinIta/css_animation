import './App.css';
import cloud from "./assets/cloud.png";
import car from "./assets/car.png";
import carYellow from "./assets/car_yellow.png";

function App() {
  return (
    <>
      <div className="sky">
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
      </div>
      <div className="grass"></div>
      <div className="road">
        <img src={car} alt="car" className="car_red"/>
        <div className="lines"></div>
        <img src={carYellow} alt="car" className="car_yellow"/>
      </div>
    </>
  );
}

export default App;
