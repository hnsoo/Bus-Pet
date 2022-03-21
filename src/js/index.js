$("input[type=radio][name=type]").on('click', () => {
    var valueCheck = $("input[type=radio][name=type]:checked").val();

    console.log(valueCheck);
    if (valueCheck == 'bus_route') {
        $("input[type=search]").attr('placeholder', '버스 번호 입력');
        $("input[type=search]").attr('onfocus', 'this.placeholder=""');
        $("input[type=search]").attr('onblur', "this.placeholder='버스 번호 입력'");
    }
    if (valueCheck == 'bus_stop') {
        $("input[type=search]").attr('placeholder', '정류장 이름 입력');
        $("input[type=search]").attr('onfocus', 'this.placeholder=""');
        $("input[type=search]").attr('onblur', "this.placeholder='정류장 이름 입력'");
    }
});