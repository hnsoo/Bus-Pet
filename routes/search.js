const data = require('../utils/data')
const express = require('express'); 
const router = express.Router(); 

router.get('/routes/:keyword', (req, res) => {
    let busRoute = req.params.keyword;   // 버스 노선

    // 공공데이터 노선 검색 api 호출
    data.getRouteNoList(busRoute, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 노선 조회 에러');
            return res.send({error});
        }
        const obj = JSON.parse(result);
        const arr = [];
        obj.response.body.items.item.forEach(e => {
            arr.push(
            {
                routeId: e.routeid,
                routeType: e.routetp,
                routeNo: e.routeno,
                startNodeNm: e.startnodenm,
                endNodeNm: e.endnodenm
            }
            )
        });
        return res.send(arr);
    })
});

router.get('/stations/:keyword', (req, res) => {
    let busStation = req.params.keyword;   // 버스 노선

    // 공공데이터 정류장 검색 api 호출
    data.getSttnNoList(busStation, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 정류장 조회 에러');
            return res.send({error});
        }
        return res.send(result);   
    })
});
module.exports = router;