function result() {
    let mark1 = parseInt(document.getElementById("s-1").value);
    let mark2 = parseInt(document.getElementById("s-2").value);
    let mark3 = parseInt(document.getElementById("s-3").value);
    let mark4 = parseInt(document.getElementById("s-4").value);
    let mark5 = parseInt(document.getElementById("s-5").value);
    let mark6 = parseInt(document.getElementById("s-6").value);
    let mark7 = parseInt(document.getElementById("s-7").value);

    let ans = document.getElementById("total");
    let ans1 = document.getElementById("percentage");


    let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6 + mark7;
    let percentage = (total / 350) * 100;

    ans.innerHTML = `Total is : ${total}</span>/ 350`;
    ans1.innerHTML = `percentage is : ${percentage}</span> %`;
}   