//////////////////////////////////////////////////////////////////////////////////////
//                                  TOP BAR                                        //
/////////////////////////////////////////////////////////////////////////////////////
var toInfo = document.getElementById("toBar");
toInfo.addEventListener("click", function(){
   toInfo.contentEditable = "true";
});

//////////////////////////////////////////////////////////////////////////////////////
//                                  KEYBOARD                                        //
/////////////////////////////////////////////////////////////////////////////////////

////////////letters and numbers will add their value/innerHTML to the textbox
var btnNum = document.getElementsByClassName("QWERTY");
for (var i=0; i<btnNum.length; i++){
    btnNum[i].addEventListener("click", function(){
        document.getElementById("textBox").innerHTML += this.innerHTML.toLowerCase(); 
    });
}

//////////adds space when SPACE button is clicked
var btnSpace = document.getElementsByClassName("space");
for (var i=0; i<btnSpace.length; i++){
    btnSpace[i].addEventListener("click", function(){
        document.getElementById("textBox").innerHTML += " ";
    });
}

//////////creates new line when enter button is clicked
var btnEnter = document.getElementById("enter");
btnEnter.addEventListener("click", function(){
    document.getElementById("textBox").innerHTML += "<br/>";
});

///////changes number buttons when SYM button is clicked
///////to be added in future developments!/////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////



////////deletes last char when SLR button is clicked
///////to be added in future developments!/////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////



////////creates temporary uppercase letters when SHIFT button is clicked
///////to be added in future developments!/////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////



///////reaction when SEND button is clicked 
var btnSend = document.getElementById("bSend");
btnSend.addEventListener("click", sendBox);

function sendBox(){
    document.getElementById("textBox").innerHTML = "<br/><br/><center>📫📬📭</center>";
    //reestablishment of base settings after 3 seconds
    setTimeout(function(){
        document.getElementById("textBox").innerHTML = "";
        document.getElementById("toBar").innerHTML = "<div id='toStr'>TO: </div>";
    }, 3000);
}



///////reaction when END buttons are clicked
var btnEndL = document.getElementById("bEndL");
btnEndL.addEventListener("click", endfxn);
var btnEndR = document.getElementById("bEndR");
btnEndR.addEventListener("click", endfxn);

function endfxn(){
    document.getElementById("textBox").innerHTML = "<br/><br/><center>💀</center>";
    document.getElementById("textBox").style.backgroundColor = "black";
    document.getElementById("toBar").style.backgroundColor = "black";
    document.getElementById("toBar").innerHTML = "";
    document.getElementById("sendBar").style.backgroundColor = "black";
    document.getElementById("sendBar").style.backgroundColor = "black";
    document.getElementById("bSendScreen").style.visibility = "hidden";
    document.getElementById("screen").style.backgroundColor = "black";
    //reestablishment of base settings after 3 seconds
    setTimeout(function(){
        document.getElementById("textBox").innerHTML = "";
        document.getElementById("textBox").style.backgroundColor = "white";
        document.getElementById("toBar").style.backgroundColor = "#add8e6";
        document.getElementById("toBar").innerHTML = "<div id='toStr'>TO: </div>";
        document.getElementById("sendBar").style.backgroundColor = "#add8e6";
        document.getElementById("bSendScreen").style.visibility = "visible";
        document.getElementById("screen").style.backgroundColor = "white";
    }, 3000);
}

//////////////////////////////////////////////////////////////////////////////////////
//                                  BOTTOM BAR                                        //
/////////////////////////////////////////////////////////////////////////////////////
var btnSendScreen = document.getElementById("bSendScreen");
btnSendScreen.addEventListener("click", sendBox);


