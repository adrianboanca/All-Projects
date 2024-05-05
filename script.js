let count = 2;

function changeColor() {
    if(count == 1){
        document.getElementById("myButton").style.backgroundColor = "green";
        count = 0
    } else if(count == 2){
        document.getElementById("myButton").style.backgroundColor = "yellow";
         count = 1
    } else {
        document.getElementById("myButton").style.backgroundColor = "red";
         count = 2
    }
}

setInterval(changeColor, 10000)
