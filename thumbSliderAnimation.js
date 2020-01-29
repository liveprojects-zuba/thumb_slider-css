document.getElementById("triggerNum").oninput = function(){
    changeSpeedValue();
}

function changeSpeedValue(speedValue){
    var speedValue = document.getElementById("triggerNum").value;
    console.log(speedValue);
}