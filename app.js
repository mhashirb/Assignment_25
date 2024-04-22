function getNumber(num){
    var results=document.getElementById("result");
    results.value+=num;
}
function clearResult(){
    var clrresult=document.getElementById("result");
    clrresult.value="";
}
function getResult(){
    var result=document.getElementById("result");
    result.value = eval(result.value);
}