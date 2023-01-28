import { useState, useEffect, useRef } from 'react'

export function useTimer() {
  const [time, setTime] = useState(0)
  const timerId = useRef(0)
  const [isCounting, setIsCounting] = useState(false)
  const [previousTime, setPreviousTime] =  useState()
  const [bestTime, setBestTime] = useState()

  useEffect(() => {
    if (isCounting) {
      timerId.current = setInterval(() => {
        setTime(_time => _time + 1)
      }, 1000)
    } else {
      clearInterval(timerId.current)
    }
    return () => clearInterval(timerId.current)
  }, [isCounting])

  const start = () => setIsCounting(true)
  const stop = () => {
    setPreviousTime(time)
    setIsCounting(false)}
  const reset = () => {
    setPreviousTime(time)
    if (!bestTime) setBestTime(time)
    else if (time < bestTime) setBestTime(time)
    setTime(0)}

  return {start, stop, reset, time, previousTime, bestTime}
}