function createSchedule(startTime, endTime, interval, intervalSat, intervalSun) {
    const week = [startTime];
    const sat = [startTime];
    const sun = [startTime];

    const weekT = addTime(startTime, interval);
    const satT = addTime(startTime, intervalSat);
    const sunT = addTime(startTime, intervalSun);

    // 평일 시간표
    while(true) {
        weekT = addTime(weekT, interval);
        if (compareTime(weekT, endTime)) {
            week.push(addTime(weekT, interval))
        }        
        else {
            break;
        }
    }

    // 토요일 시간표
    while(true) {
        satT = addTime(satT, intervalSat);
        if (compareTime(satT, endTime)) {
            sat.push(addTime(satT, intervalSat))
        }        
        else {
            break;
        }
    }

    // 일요일 시간표
    while(true) {
        sunT = addTime(sunT, intervalSun);
        if (compareTime(sunT, endTime)) {
            sun.push(addTime(sunT, intervalSun))
        }        
        else {
            break;
        }
    }
    console.log({week:week, sat:sat, sun:sun});
    return {week:week, sat:sat, sun:sun}
}

// HHMM 형식의 시간을 더하고 HHMM으로 반환
function addTime(timeA, timeB, ) {
    let m = parseInt(timeA.slice(0, 2)) * 60 + parseInt(timeA.slice(2,4)) 
    + parseInt(timeB.slice(0, 2)) * 60 + parseInt(timeB.slice(2,4));

    let HH = Math.floor(m / 60);
    let MM = m % 60;
    return String(HH) + String(MM)
}

// HHMM 형식 시간 비교 endTime 넘으면 false
function compareTime(time, endTime) {
    if (parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(2,4)) < parseInt(endTime.slice(0, 2)) * 60 + parseInt(endTime.slice(2,4))) {
        return true;
    }
    else {
        return false;
    }
}

export { createSchedule };