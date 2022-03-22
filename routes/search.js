const express = require('express'); 
const public = require('./public.js');
const router = express.Router(); 

// 경로 매개변수를 사용한 라우팅: 특정 유저 정보 제공
router.get('/route/:keyword', (req, res) => {
    let busRoute = req.params.keyword;   // 버스 노선

    // 공공데이터 노선 검색 api 호출
    public.getRouteNoList(busRoute, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 노선 조회 에러');
            return res.send({error});
        }
        return res.send(result);
    })
});

router.get('/station/:keyword', (req, res) => {
    let busStation = req.params.keyword;   // 버스 노선

    // 공공데이터 정류장 검색 api 호출
    public.getSttnNoList(busStation, (error, {result}={})=>{
        if(error){
            console.log('error: 버스 정류장 조회 에러');
            return res.send({error});
        }
        return res.send(result);   
    })
});
module.exports = router;