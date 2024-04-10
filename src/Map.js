import React, { useEffect, useRef, useState } from 'react';
import map from './map.png'
import AudioInfo from './audioinfo.js'
import audio1 from "./recordings/Quad_Morning.mp3"
import audio2 from "./recordings/urbana_m.mp3"
import audio3 from "./recordings/Alma_Morning.mp3"
import audio4 from "./recordings/green_st_mn.m4a"
import audio5 from "./recordings/GreenSecond_Morning.mp3"
import audio6 from "./recordings/SouthQuad_Morning.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'

const Map = () => {
  const imageRef = useRef(null);
  const audioPaths = [audio1,audio2,audio3,audio4,audio5,audio6]
  const [rectTop, setRectTop] = useState(0);
  const [rectLeft, setRectLeft] = useState(0);
  const [audoFile,setAudioFile] = useState('')
  
  const [showPopup, setShowPopup] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const handleMouseEnter = (index) => () => {
    console.log(index);
    setShowIndex(index);
    setShowPopup(true);
    setAudioFile(audioPaths[index-1])
  }
  const handleMouseLeave = () => {
    setShowPopup(false);
  }
  useEffect(() => {
    const updatePositions = () => {
      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        // Adjust Y and X values for desired rectangle positions
        console.log(imageRect.top)
        console.log(imageRect.left)
        setRectTop(imageRect.top)
        setRectLeft(imageRect.left)
      }
    };

    // Call updatePositions on initial render and window resize
    updatePositions();
    window.addEventListener('resize', updatePositions);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', updatePositions);
  }, []);
  const styles = {
    // Define base styles with placeholders for dynamic values
    r1: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 150}px`, // Use template literal and string interpolation
      left: `${rectLeft + 320}px`,
      position: 'fixed',
    },
    r2: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 20}px`, // Use template literal and string interpolation
      left: `${rectLeft + 450}px`,
      position: 'fixed',
    },
    r3: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 80}px`, // Use template literal and string interpolation
      left: `${rectLeft + 280}px`,
      position: 'fixed',
    },
    r4: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 70}px`, // Use template literal and string interpolation
      left: `${rectLeft + 180}px`,
      position: 'fixed',
    },
    r5: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 70}px`, // Use template literal and string interpolation
      left: `${rectLeft + 100}px`,
      position: 'fixed',
    },
    r6: {
      width: '20px',
      height: '20px',
      top: `${rectTop + 250}px`, // Use template literal and string interpolation
      left: `${rectLeft + 320}px`,
      position: 'fixed',
    },
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }
  const handleClose = () => setIsOpen(false);

  const PopUp = ({ children, show }) => {
    return (show ? <div className={`popup ${show ? 'popup-enter-active' : ''}`} onClick={handleClick}>{children}</div> : null);
  }

  return (
    //TODO: add the rest of the icon locations, and add their hover effects
    //create different overlay for each icon click, using different audio files for each one
    <div className="wrapper">
      <img ref={imageRef} src={map} className="Map" alt="Map" />
      
      <div style={styles.r1} className="rectangle1" onMouseEnter={handleMouseEnter(1)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 1} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 5%
          </li>
          <li>
          <strong>Wildlife: </strong> 5%
          </li>
          <li>
          <strong>Speech: </strong> 10%
          </li>
          <li>
          <strong>Traffic: </strong> 80%
          </li>
        </ul>
        </PopUp>
        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      <div style={styles.r2} className="rectangle2" onMouseEnter={handleMouseEnter(2)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 2} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 40%
          </li>
          <li>
          <strong>Wildlife: </strong> 5%
          </li>
          <li>
          <strong>Speech: </strong> 5%
          </li>
          <li>
          <strong>Traffic: </strong> 50%
          </li>
        </ul>
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      <div style={styles.r3} className="rectangle3" onMouseEnter={handleMouseEnter(3)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 3} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 15%
          </li>
          <li>
          <strong>Wildlife: </strong> 5%
          </li>
          <li>
          <strong>Speech: </strong> 35%
          </li>
          <li>
          <strong>Traffic: </strong> 45%
          </li>
        </ul>
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      <div style={styles.r4} className="rectangle4" onMouseEnter={handleMouseEnter(4)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 4} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 4%
          </li>
          <li>
          <strong>Wildlife: </strong> 1%
          </li>
          <li>
          <strong>Speech: </strong> 45%
          </li>
          <li>
          <strong>Traffic: </strong> 50%
          </li>
        </ul>
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      <div style={styles.r5} className="rectangle5" onMouseEnter={handleMouseEnter(5)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 5} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 17%
          </li>
          <li>
          <strong>Wildlife: </strong> 3%
          </li>
          <li>
          <strong>Speech: </strong> 30%
          </li>
          <li>
          <strong>Traffic: </strong> 50%
          </li>
        </ul>
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      <div style={styles.r6} className="rectangle6" onMouseEnter={handleMouseEnter(6)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 6} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
          <strong>Ambient: </strong> 40%
          </li>
          <li>
          <strong>Wildlife: </strong> 5%
          </li>
          <li>
          <strong>Speech: </strong> 20%
          </li>
          <li>
          <strong>Traffic: </strong> 35%
          </li>
        </ul>
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} /> :
      </div>
      {isOpen && (
        <div className="overlay">
          <div className="box">
            <AudioInfo audioUrl={audoFile}/>
            <button className="close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;