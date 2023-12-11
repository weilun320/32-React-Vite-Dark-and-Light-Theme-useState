import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  function switchTheme() {
    if (isDarkTheme) {
      setDarkTheme(false);
    }
    else {
      setDarkTheme(true);
    }
  }

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <h1>Theme Switcher</h1>
      <p>{isDarkTheme ? "Dark Theme" : "Light Theme"}</p>
      <button onClick={switchTheme}>Toggle Theme</button>
    </div>
  );
}

export default App
