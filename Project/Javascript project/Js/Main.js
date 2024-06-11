//Loder 
let MyLoader;
function MainFunction(){
 MyLoader=setTimeout("Test()",1500);   
}

function Test(){
    document.getElementById("loader").style="display:none !important";
    document.getElementById("main-content").style="display:block !important";
}


// Login
function Login(){

let f1 = document.getElementById("f1").value
let f2 = document.getElementById("f2").value

if(f1 === "8140473064" && f2=== "8140473064"){
alert("Your are Login Successfully")
window.location='Dasbored.htm';
}
else{
alert("Your Email & Passwored Are Incorrect Try Again")
return false;
}

}


// Logout

function logout(){

    confirm("Do You Want To Close")? window.location="index.htm" :window.location="Dasbored.htm"

}