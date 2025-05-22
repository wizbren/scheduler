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

  function back() {
    setHistory(prev => {
      if (prev.length < 2) return prev;
      const newHistory = [...prev.slice(0, -1)];
      setMode(newHistory[newHistory.length - 1])
      return newHistory;
    });
  }

  return { mode, transition, back };
}