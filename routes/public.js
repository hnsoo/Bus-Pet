const request = require('request')
const path = require("path");

require('dotenv').config("..\.env");    // 리눅스 배포시 경로 수정 필요

const getRouteNoList = (busRoute, callback) => {

    var url = 'http://apis.data.go.kr/1613000/BusRouteInfoInqireService/getRouteNoList';

    var queryParams = '?' + encodeURIComponent('serviceKey') + `=${process.env.PUBLIC_KEY}`; // Service Key
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); // json 형식 반환
    queryParams += '&' + encodeURIComponent('cityCode') + '=' + encodeURIComponent('34040'); // 아산시
    queryParams += '&' + encodeURIComponent('routeNo') + '=' + encodeURIComponent(busRoute); // 버스 노선
    
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

exports.getRouteNoList = getRouteNoList;