// 노선, 정류장 버튼 액션
function typeCheck(value) {
    const bal = document.getElementById("keyword")
    if (value == 'bus_route') {
        bal.setAttribute('placeholder', '버스 번호 입력');
        bal.setAttribute('onfocus', 'this.placeholder=""');
        bal.setAttribute('onblur', "this.placeholder='버스 번호 입력'");
    }
    else {
        bal.setAttribute('placeholder', '정류장 이름 입력');
        bal.setAttribute('onfocus', 'this.placeholder=""');
        bal.setAttribute('onblur', "this.placeholder='정류장 이름 입력'");
    }
}



// const url = "http://localhost:5000"
// // 검색 api 호출
// let result = fetch(url + '/route' + '/4', {
//     method: 'get'
// })

// result.then(res => res.json())
//     .then(json => {

//     })
