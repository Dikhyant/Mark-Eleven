const dobPanel = document.querySelector("#dob");
const luckyNumPanel = document.querySelector("#lucky-number");

//const dobEntryBtn = document.querySelector("#btn-dob");
const luckyNumBtn = document.querySelector("#btn-lucky-number");

const messageForUser = document.querySelector("#message-for-user span");
messageForUser.style.visibility = "hidden";

var sumOfDob = 0;
var luckyNum = 0; //amount paid by customer

//adding event listener to panels
dobPanel.addEventListener( "input" , (event)=>{
    event.target.value.match(/\d+/g).forEach( (n)=>{
        n = parseInt(n);
        while( n > 0 ) {
            sumOfDob += n % 10;
            n = parseInt(n / 10);
        }
    } )
})

luckyNumPanel.addEventListener( "input" , (event)=>{
    //console.log(event.target.value)
    luckyNum = parseInt(event.target.value);
})



//adding event listener to buttons

/*
dobEntryBtn.addEventListener( "click" , (event)=>{
    
} );
*/


luckyNumBtn.addEventListener( "click" , (event)=>{

    if(sumOfDob % luckyNum == 0) {
        messageForUser.innerHTML = "Your Birthday is Lucky"
    } else {
        messageForUser.innerHTML = "Your Birthday is not Lucky"
    }

    messageForUser.style.visibility = "visible";
} );