
function buttonUp(){
    
    if(document.getElementById("r10").checked){
        document.getElementById("r9").checked = true;
        // document.getElementById("arrow_down").style.stroke = "#0a084a"

    }
    else if(document.getElementById("r9").checked){
        document.getElementById("r8").checked = true;
    }
    else if(document.getElementById("r8").checked){
        document.getElementById("r7").checked = true;
    }
    else if(document.getElementById("r7").checked){
        document.getElementById("r6").checked = true;
    }
    else if(document.getElementById("r6").checked){
        document.getElementById("r5").checked = true;
    }
    else if(document.getElementById("r5").checked){
        document.getElementById("r4").checked = true;
    }
    else if(document.getElementById("r4").checked){
        document.getElementById("r3").checked = true;
    }
    else if(document.getElementById("r3").checked){
        document.getElementById("r2").checked = true;
    }
    else if(document.getElementById("r2").checked){
        document.getElementById("r1").checked = true;
    }
            
}
// if(document.getElementById("r1").checked == false){
//     document.getElementById("arrow_up").style.stroke = "#0a084a";
// }
// else if(document.getElementById("r1").checked == true){
//     document.getElementById("arrow_up").style.stroke = "grey";
// }
// else {
//     document.getElementById("arrow_up").style.stroke = "#0a084a";
// }
function buttonDown(){
    
    if(document.getElementById("r10").checked){
        document.getElementById("r1").checked = true;
        // document.getElementById("arrow_down").style.stroke = "grey"
    }
    else if(document.getElementById("r9").checked){
        document.getElementById("r10").checked = true;
    }
    else if(document.getElementById("r8").checked){
        document.getElementById("r9").checked = true;
    }
    else if(document.getElementById("r7").checked){
        document.getElementById("r8").checked = true;
    }
    else if(document.getElementById("r6").checked){
        document.getElementById("r7").checked = true;
    }
    else if(document.getElementById("r5").checked){
        document.getElementById("r6").checked = true;
    }
    else if(document.getElementById("r4").checked){
        document.getElementById("r5").checked = true;
    }
    else if(document.getElementById("r3").checked){
        document.getElementById("r4").checked = true;
    }
    else if(document.getElementById("r2").checked){
        document.getElementById("r3").checked = true;
    }
    else if(document.getElementById("r1").checked){
        document.getElementById("r2").checked = true;
    }
            
}

let r1 = document.getElementById("r1"); 
function arrowCheck(){
    var x = document.getElementById("arrow_up");
    if (x.className === "arrow") {
        x.className += " arrow-check";
    } 
    else {
        x.className = "arrow";
    }
}
