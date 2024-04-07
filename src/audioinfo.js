import React, {useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

const AudioInfo = ({audioUrl}) => {
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
  }, [audioUrl]);

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
          Location
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
      </div>
    </>
  );
};

export default AudioInfo;