import React, {useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js'
import { PieChart } from '@mui/x-charts/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

const AudioInfo = ({audioUrl, location, classify, audioItems}) => {
  const waveRef = useRef();
  const waveSurferRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause state
  useEffect(() => {
    if(waveRef.current && !waveSurferRef.current) {
      console.log("current")
      waveSurferRef.current = WaveSurfer.create({
        container: waveRef.current,
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
      })
      waveSurferRef.current.load(audioUrl);
      waveSurferRef.current.on('ready', () => { waveSurferRef.current.zoom(Number(15))})
    }
  }, [audioUrl, location, classify, audioItems]);

  const playAudio = () => {
    // Check if the audio is already playing
    setIsPlaying(!isPlaying);
    if (waveSurferRef.current.isPlaying()) {
      waveSurferRef.current.pause();
    } else {
      waveSurferRef.current.play();
    }
  };
  
  return (
    <>
      <div className="audio-container">
        <div className="location">
          {location}
        </div>
        <div ref={waveRef} className="audio">

        </div>
        <div className="buttons">
          <span className="play-btn btn" onClick={playAudio} >
            {isPlaying ? 
              <FontAwesomeIcon className="fa-pause" icon={faPause} /> :
              <FontAwesomeIcon className="fa-play" icon={faPlay} />
            }
          </span>
        </div>
        <PieChart
          series={[
            {
              data: classify,
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
              itemGap: 10,
            }
          }}
          width={400}
          height={200}
        />
        <div>
        <figure>
          <figcaption className="audio-list">Sounds found here</figcaption>
          <ul className="no-bullets">
          {audioItems.map((item, index) => (
            <li>{item}</li>
          ))}
          </ul>
        </figure>
        </div>
      </div>
    </>
  );
};

export default AudioInfo;