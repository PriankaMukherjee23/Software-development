let submit=document.getElementById("submit");
let placeName=document.getElementById("placeName");

submit.addEventListener("click",function(){
    if(placeName.value==""){
        alert("Fill Form");
    }
    else{
        alert(placeName.value + "Tour Booked")
    }
})