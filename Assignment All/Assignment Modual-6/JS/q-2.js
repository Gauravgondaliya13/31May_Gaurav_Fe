function number() {
    let a = document.getElementById("value").value;
    console.log(a)
    if (a == "") {
        alert('Write a value');
    }
    else if (isNaN(a)) {
        alert('value is Not a Number');
    }
    else {
        alert('value is a Number');
    }
}