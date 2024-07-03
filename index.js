const setDayandTime =()=>{
    const date = new Date()

    const utcHour = date.getUTCHours()
    const utcMinutes = date.getUTCMinutes()
    const utcSeconds = date.getUTCSeconds()

    const utcDay = date.getUTCDay()
    
    const utcTime = `${utcHour}:${utcMinutes}:${utcSeconds}`

    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const time = document.getElementById('time')
    const day = document.getElementById('day')

    time.textContent = `${utcTime}`
    day.textContent = `${week[utcDay]}`

}

setInterval(setDayandTime,1000)