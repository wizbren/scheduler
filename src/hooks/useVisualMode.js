import { useState } from "react";


export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory(prev => 
      replace
        ? [...prev.slice(0, prev.length - 1), newMode]
        : [...prev, newMode]
    );
  }

  function back() {
    setHistory(prev => {
      if (prev.length < 2) return prev;

      return [...prev.slice(0, prev.length - 1)];
    })
  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
}