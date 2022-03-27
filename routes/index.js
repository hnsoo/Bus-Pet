const data = require('../utils/data')
const schedule = require('../utils/schedule')

const express = require('express'); 
const path = require('path');
const router = express.Router(); 

router.get('/', (req, res) => { 
    res.render('index')
}); 

router.get('/route/:routeId', (req, res) => {
    const routeId = req.params.routeId;
    const resultRouteInfo = [];
    // 노선 세부 정보 조회 및 시간표 계산
    data.getRouteInfoIem(routeId, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 노선 상세 조회 에러');
            return res.send({error});
        }
        const obj = JSON.parse(result);
        const info = [];
        let e = obj.response.body.items.item
        // 노선 기본 정보
        info.push(
            {
                routeNo: e.routeno,                     // 노선번호
                routeType: e.routetp,                   // 노선유형
                startNodeNm: e.startnodenm,             // 기점
                endNodeNm: e.endnodenm,                 // 종점
                intervalTime: e.intervaltime,           // 배차시간 (평일)
                intervalSatTime: e.intervalsattime,     // 배차시간 (토요일)
                intervalSunTime: e.intervalSunTime      // 배차시간 (일요일)
            }
        );
        // TODO: 실시간 위치

        // TODO: 기점 출발 시간 (1시간 단위로 전, 1시간 단위로후 최근)
        console.log(typeof(e.startvehicletime));
        console.log(e.intervaltime);
        // 노선 시간표
        resultRouteInfo.push(schedule.createSchedule(e.startvehicletime, e.endvehicletime, e.intervaltime, e.intervalsattime, e.intervalsuntime))
    });

    // 노선 경유 정류장 조회 
    data.getRouteAcctoThrghSttnList(routeId, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 경유 정류장 조회 에러');
            return res.send({error});
        }
        const obj = JSON.parse(result);
        const stations = [];
        obj.response.body.items.item.forEach(e => {
            stations.push(
                {
                    routeNo: e.routeno,                     // 노선번호
                    stationId: e.nodeid,                    // 정류장 id
                    stationNm: e.nodenm,                    // 정류장 이름
                    stationNo: e.nodeno,                    // 정류장 번호
                    stationOrd: e.nodeord,                  // 정류장 순번
                    updowncd: e.updowncd,                   // 상하행 구분 코드 (* 해당 값 없이 상하행 두개의 노선이 있을 수 있음)
                }
            )
        });
        resultRouteInfo.push({station: stations});
    }); 
    console.log({response: resultRouteInfo});
    res.render('bus', {response: resultRouteInfo});
});

router.post('/station', (req, res) => {
    res.render()
})

module.exports = router;