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
                fetch(url + '/routes/' + keyword)
                    .then(res=>res.json())
                    .then(json=>{
                        json.forEach(e=>{
                            const bus = document.createElement("div");
                            bus.append(e.routeId)
                            bus.append(e.routeType)
                            bus.append(e.routeNo)
                            bus.append(e.startNodeNm)
                            bus.append(e.endNodeNm)
                            bus.setAttribute('id', e.routeId)
                            bus.addEventListener("click", () => {showBusRoute(e.routeId)} )
                            const list = document.getElementById("list");
                            list.appendChild(bus)
                        })
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

function showBusRoute(routeId) {
    console.log(routeId);
    fetch(url + '/route' + '/' + routeId)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
        })
}