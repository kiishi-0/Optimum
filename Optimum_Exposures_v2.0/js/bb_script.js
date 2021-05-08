
function buttonUp(){
    if(document.getElementById("r6").checked){
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
function buttonDown(){
    
    if(document.getElementById("r6").checked){
        document.getElementById("r1").checked = true;
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
