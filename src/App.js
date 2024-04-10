import Map from './Map'; // Assuming the component is in a separate file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Champaign-Urbana Morning Soundscape </h1>
      <p>     
        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
        Hover or Click on Volume Icons to See Details!
      </p>
      <Map/>
      <div className="ripple" style={{position: "absolute", left: "200px", top: "100px"}} />
    </div>
  );
}

export default App;
