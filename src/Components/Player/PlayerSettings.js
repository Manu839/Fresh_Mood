import React, { useContext, useState } from 'react';
import {
  BsFillPlayFill, BsFillPauseFill,
  BsFillVolumeMuteFill, BsFillVolumeUpFill, BsVolumeDownFill,
} from 'react-icons/bs';
import { ImLoop2 } from 'react-icons/im';
import { PreferencesContext } from '../../Context/Preferences';

const PlayerSettings = () => {
  const {
    setVideo, Config, setConfig, VideoControls, setVideoControls,
  } = useContext(PreferencesContext);
  const [Link, setLink] = useState('');
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">
            Paste a
            video link
          </span>
        </label>
        <input
          type="text"
          onChange={
            (e) => setLink(e.target.value)
          }
          placeholder="www.youtube.com/watch..."
          className="input input-bordered w-full max-w-xs mt-2"
        />
      </div>
      <div className="justify-center gap-4  items-center mt-3 w-full">
        {VideoControls.playing ? (
          <button
            onClick={
              () => setVideoControls({ ...VideoControls, playing: false })
            }
            type="button"
            className="btn btn-ghost btn-xs uppercase gap-2"
          >
            <BsFillPauseFill />
            Pause
          </button>
        ) : (
          <button
            onClick={
            () => {
              if (Link !== '') {
                setVideo(Link);
                if (!Config.history.includes(Link)) {
                  setConfig({ ...Config, history: [...Config.history, Link] });
                }
                setVideoControls({ ...VideoControls, playing: true });
              }
            }
          }
            type="button"
            className="btn btn-primary btn-xs uppercase gap-2"
          >
            <BsFillPlayFill />
            Play
          </button>
        )}
        {
          !VideoControls.loop ? (
            <button
              onClick={
                () => setVideoControls({ ...VideoControls, loop: true })
              }
              type="button"
              className="btn btn-ghost btn-xs"
            >
              <ImLoop2 />
              Loop
            </button>
          ) : (
            <button
              onClick={
                () => setVideoControls({ ...VideoControls, loop: false })
              }
              type="button"
              className="btn btn-primary btn-xs uppercase gap-2"
            >
              <ImLoop2 />
              Loop
            </button>
          )
        }

        {
        Number(VideoControls.volume) === 0 ? (<BsFillVolumeMuteFill size={30} className="text-error" />) : (Number(VideoControls.volume) > 0.5 ? <BsFillVolumeUpFill size={30} /> : <BsVolumeDownFill size={30} />)
        }
        <input
          type="range"
          onChange={
        (e) => {
          setVideoControls({ ...VideoControls, volume: e.target.value });
        }
      }
          defaultValue={VideoControls.volume}
          min={0}
          max={1}
          step={0.01}
          className="range range-xs"
        />

      </div>
      <br />
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Video Opacity</span>
        </label>
        <input
          type="range"
          onChange={
        (e) => {
          setVideoControls({ ...VideoControls, opacity: e.target.value });
        }
      }
          defaultValue={VideoControls.volume}
          min={0}
          max={1}
          step={0.01}
          className="range range-xs"
        />
      </div>

    </div>
  );
};

export default PlayerSettings;
