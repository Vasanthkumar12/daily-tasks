import React, { useEffect, useState } from 'react'

export const useTimer = (timer = 0) => {

    const [time, setTimer] = useState(timer)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTimer((t) => t + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

  return time
}
