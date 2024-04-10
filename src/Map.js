import React, { useEffect, useRef, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import map from './map.png'
import AudioInfo from './audioinfo.js'
// morning audio paths
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
  const locations = ["Main Quad", "Urbana", "Alma", "Green & 4th", "Green & Second", "South Quad"]
  const audioClass = [
    // Quad
    [
      {id: 0, value: 70, label: 'Ambient'},
      {id: 1, value: 0, label: 'Wildlife'},
      {id: 2, value: 0, label: 'Speech'},
      {id: 3, value: 30, label: 'Traffic'},
    ],
    // Urbana
    [
      {id: 0, value: 4, label: 'Ambient'},
      {id: 1, value: 8, label: 'Wildlife'},
      {id: 2, value: 80, label: 'Speech'},
      {id: 3, value: 8, label: 'Traffic'},
    ],
    // Alma
    [
      {id: 0, value: 22, label: 'Ambient'},
      {id: 1, value: 0, label: 'Wildlife'},
      {id: 2, value: 78, label: 'Speech'},
      {id: 3, value: 0, label: 'Traffic'},
    ],
    // Green
    [
      {id: 0, value: 6, label: 'Ambient'},
      {id: 1, value: 2, label: 'Wildlife'},
      {id: 2, value: 28, label: 'Speech'},
      {id: 3, value: 54, label: 'Traffic'},
    ],
    // Green & Second
    [
      {id: 0, value: 12, label: 'Ambient'},
      {id: 1, value: 32, label: 'Wildlife'},
      {id: 2, value: 54, label: 'Speech'},
      {id: 3, value: 2, label: 'Traffic'},
    ],
    // South Quad
    [
      {id: 0, value: 86, label: 'Ambient'},
      {id: 1, value: 0, label: 'Wildlife'},
      {id: 2, value: 0, label: 'Speech'},
      {id: 3, value: 14, label: 'Traffic'},
    ],
  ]
  const audioItems = [
    ["Speech", "Yelling"],
    ["Motorcycle", "Birds", "Crosswalk"],
    ["Siren", "Food Truck", "Construction", "Bus"],
    ["Birds", "Speech", "Crosswalk"],
    ["Birds", "Siren", "Honk"],
    ["Lots of Wind", "Construction", "Siren"],
  ]
  const [rectTop, setRectTop] = useState(0);
  const [rectLeft, setRectLeft] = useState(0);
  
  const [showPopup, setShowPopup] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const handleMouseEnter = (index) => () => {
    console.log(index);
    setShowIndex(index);
    setShowPopup(true);
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
        <PieChart
          series={[
            {
              data: audioClass[0],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>
        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      <div style={styles.r2} className="rectangle2" onMouseEnter={handleMouseEnter(2)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 2} onMouseLeave={handleMouseLeave}>
        <PieChart
          series={[
            {
              data: audioClass[1],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      <div style={styles.r3} className="rectangle3" onMouseEnter={handleMouseEnter(3)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 3} onMouseLeave={handleMouseLeave}>
        <PieChart
          series={[
            {
              data: audioClass[2],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      <div style={styles.r4} className="rectangle4" onMouseEnter={handleMouseEnter(4)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 4} onMouseLeave={handleMouseLeave}>
        <PieChart
          series={[
            {
              data: audioClass[3],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      <div style={styles.r5} className="rectangle5" onMouseEnter={handleMouseEnter(5)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 5} onMouseLeave={handleMouseLeave}>
        <PieChart
          series={[
            {
              data: audioClass[4],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      <div style={styles.r6} className="rectangle6" onMouseEnter={handleMouseEnter(6)}>
        <PopUp className={`popup ${showPopup ? 'popup-enter-active' : 'popup-enter'}`} show={showPopup && showIndex === 6} onMouseLeave={handleMouseLeave}>
        <PieChart
          series={[
            {
              data: audioClass[5],
            },
          ]}
          slotProps={{
            legend: {
              position: {
                vertical: 'middle',
                horizontal: 'right',
              },
              itemMarkWidth: 20,
              itemMarkHeight: 2,
              markGap: 5,
              itemGap: 2,
            }
          }}
          width={200}
          height={100}
        />
        </PopUp>

        <FontAwesomeIcon className="fa-volume" icon={faVolumeHigh} />
      </div>
      {isOpen && (
        <div className="overlay">
          <div className="box">
            <AudioInfo audioUrl={audioPaths[showIndex-1]} location={locations[showIndex-1]} classify={audioClass[showIndex-1]} audioItems={audioItems[showIndex-1]}/>
            <button className="close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;