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

const url = "http://localhost:5000"

// 검색 기능
document.getElementsByTagName("form")[0].onsubmit = () => {
    const typeNodeList = document.getElementsByName('type');
    const keyword = this.keyword.value;
    
    typeNodeList.forEach((node) => {
        if(node.checked) {
            if (node.value == 'bus_route') {
                // 버스 노선 검색 api 호출
                fetch(url + '/search/route/' + keyword)
                    .then(res=>res.json())
                    .then(json=>{
                        console.log(keyword)
                        console.log(json);
                    })
            }
            else {
                // 버스 정류장 검색 api 호출
                fetch(url + '/search/station/' + keyword)
                    .then(res=>res.json())
                    .then(json=>{
                        console.log(keyword)
                        console.log(json);
                    })
            }
        }
    })
    return false;
}