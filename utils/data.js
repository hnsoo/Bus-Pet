const request = require('request')
const path = require("path");

require('dotenv').config("..\.env");    // 리눅스 배포시 경로 수정 필요

// 버스 노선 검색 api
const getRouteNoList = (busRoute, callback) => {

    var url = 'http://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteNoList';

    var queryParams = '?' + encodeURIComponent('serviceKey') + `=${process.env.PUBLIC_KEY}`; // Service Key
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('34040'); // 아산시
    queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(busRoute); // 버스 노선
    console.log(url+queryParams);
    request(
        {
            url: url + queryParams,
            method: 'GET'
        }, 
        (error, response, body) => {
            callback(undefined,{
                result:body
            })
        }
    );
}

// 정류장 이름으로 검색 api
const getSttnNoList = (busStation, callback) => {

    var url = 'http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getSttnNoList';

    var queryParams = '?' + encodeURIComponent('serviceKey') + `=${process.env.PUBLIC_KEY}`; // Service Key
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('34040'); // 아산시
    queryParams += '&' + encodeURIComponent('nodeNm') + '=' + encodeURIComponent(busStation); // 정류장 이름
    console.log(url+queryParams);
    request(
        {
            url: url + queryParams,
            method: 'GET'
        }, 
        (error, response, body) => {
            callback(undefined,{
                result:body
            })
        }
    );
}

// 버스 노선 세부 정보 조회
const getRouteInfoIem = (routeId, callback) => {
    var url = 'http://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteInfoIem';

    var queryParams = '?' + encodeURIComponent('serviceKey') + `=${process.env.PUBLIC_KEY}`; // Service Key
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('34040'); // 아산시
    queryParams += '&' + encodeURIComponent('routeId') + '=' + encodeURIComponent(routeId); // 버스 ID
    console.log(url+queryParams);
    request(
        {
            url: url + queryParams,
            method: 'GET'
        }, 
        (error, response, body) => {
            callback(undefined,{
                result:body
            })
        }
    );
}

// 버스가 경유하는 정류장 조회
const getRouteAcctoThrghSttnList = (routeId, callback) => {
    var url = 'http://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteAcctoThrghSttnList';

    var queryParams = '?' + encodeURIComponent('serviceKey') + `=${process.env.PUBLIC_KEY}`; // Service Key
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('34040'); // 아산시
    queryParams += '&' + encodeURIComponent('routeId') + '=' + encodeURIComponent(routeId); // 버스 ID
    console.log(url+queryParams);
    request(
        {
            url: url + queryParams,
            method: 'GET'
        }, 
        (error, response, body) => {
            callback(undefined,{
                result:body
            })
        }
    );
}




export { getRouteNoList, getSttnNoList, getRouteInfoIem, getRouteAcctoThrghSttnList };