import React, { useState, useEffect } from 'react'

const usePosition =  () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const getMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    document.addEventListener('mousemove', getMousePosition)
    return () => {
      document.removeEventListener('mousemove', getMousePosition)
    };
  });
  return {
    x: x,
    y: y
  }
}

export default usePosition;