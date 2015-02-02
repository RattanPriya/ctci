window.onload = function() {
    var M = {},
        V = {},
        C = {};

    M.data = document.getElementById('num').value;
    V.render = function (result) {
        alert(result);
    }
    C.tellMeWhatToSay = function() {
        var number = M.data,
            str = "", 
            result;
        if(!number) return;

        if (number % 5 === 0 || number.toString().indexOf("5") >= 0) {
            str = "boots";
        }
        if (number % 7 === 0 || number.toString().indexOf("7") >= 0) {

            if (str) {
                str += " cats";
            } else {
                str = "cats";
            }
            console.log(str);
      
            
        } 
        result = str ? str: number;
        V.render(result);
    }
    document.getElementById('button1').addEventListener('click', function(e) {
        e.preventDefault();
        M.data = document.getElementById('num').value;
        C.tellMeWhatToSay();
    });


}();