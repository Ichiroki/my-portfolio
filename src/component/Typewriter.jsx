import React, { useEffect, useRef, useState } from 'react';

const TypewriterText = ({ text, speed = 100, onDone }) => {
  const [displayed, setDisplayed] = useState('')
  const hasStarted = useRef(null)

  useEffect(() => {

    if(hasStarted.current) return
    hasStarted.current = true

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return <p>{displayed}</p>;
};

export default TypewriterText;
