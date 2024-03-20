import React, { createContext, useState } from 'react';

export const PreferencesContext = createContext();
const ThemeList = ['dark', 'emerald', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'forest', 'aqua', 'luxury', 'dracula', 'business', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'sunset'];

const defaultPreferences = {
  timer: 15,
  theme: 'night',
  history: [],
  disable_alarm: false,
};

export const Preferences = ({ children }) => {
  const [Config, setConfig] = useState(JSON.parse(localStorage.getItem('fresh-mood')) || defaultPreferences);
  const [Video, setVideo] = useState(null);
  const [VideoControls, setVideoControls] = useState({
    volume: 0.5,
    playing: false,
    loop: true,
    opacity: 0.7,
  });
  const [Alarm, setAlarm] = useState(false);
  localStorage.setItem('fresh-mood', JSON.stringify(Config));
  return (
    <PreferencesContext.Provider value={{
      setVideo,
      Video,
      Config,
      setConfig,
      ThemeList,
      VideoControls,
      setVideoControls,
      Alarm,
      setAlarm,
    }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
