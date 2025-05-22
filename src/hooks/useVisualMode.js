import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);

    setHistory(prev => 
      replace ? [...prev.slice(0, prev.length - 1), newMode] : [...prev, newMode]
    );
  }

  return { mode, transition };
}