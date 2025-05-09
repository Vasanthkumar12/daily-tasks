import React, { useEffect, useState } from 'react'

export const Time = () => {
  const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' })
  
  const updateTime = () => {
    setTime({ 
      hours: new Date().getHours().toString(), 
      minutes: new Date().getMinutes().toString(), 
      seconds: new Date().getSeconds().toString()
    })
  }

  useEffect (() => {
    setInterval(() => {
      updateTime()
    }, 1000)
  }, [])

  // console.log(time)
  return (
    <div>
        <p>{Number(time.hours) < 10? ('0' + time.hours) : time.hours}:{Number(time.minutes) < 10? ('0' +time.minutes) : time.minutes}:{Number(time.seconds) < 10? ('0' + time.seconds) : time.seconds}</p>
    </div>
  )
}
