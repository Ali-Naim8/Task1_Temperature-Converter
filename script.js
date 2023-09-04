document.getElementById("submitbutton").onclick=function(){
    let temp;
    if(document.getElementById("cbutton").checked==true){
    temp=document.getElementById("textbox").value;
    temp=Number(temp);
    temp=tocelsius(temp);
    document.getElementById("templabel").innerHTML=temp+ " C";
    }
    else if(document.getElementById("fbutton").checked==true){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=tofahrenheit(temp);
        document.getElementById("templabel").innerHTML=temp+ " F";
    }
    else if(document.getElementById("kbutton").checked==true){
        temp=document.getElementById("textbox").value;
        temp=Number(temp);
        temp=tofahrenheit(temp);
        document.getElementById("templabel").innerHTML=temp+ " K";
    }
    else{
        document.getElementById("templabel").innerHTML="select a unit";
    }
}


function tocelsius(temp){
    return parseInt((temp-32)*(5/9));
}

function tofahrenheit(temp){
    return parseInt(temp*9/5 +32);
}
function tokelvin(temp){
    return parseInt(tocelsius + 273.15);
}