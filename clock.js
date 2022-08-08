let yourname = prompt("Please enter your name: ");
let innername;
innername = document.querySelector("#myName");
innername.innerHTML = `${yourname}`

function showTime(){
    let d = new Date()
    let myClock = document.querySelector("#myClock")
    console.log(d.getDate())
    console.log(d.getDay())
    let days = ["Pazartesi", "Salı", "Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    myClock.innerHTML =`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} ${days[d.getDay()]}`
    
    setTimeout(showTime, 1000)
    
    }
    
    showTime()