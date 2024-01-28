function buttonClick(insert){
    document.getElementById("screen").value = document.getElementById("screen").value + insert;
}

function clearClick(){
    document.getElementById("screen").value = " ";
}
function equalClick(){
    var numValues = document.getElementById("screen").value;
    var result = eval(numValues);
    document.getElementById("screen").value = result;
}