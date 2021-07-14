const startBtn = document.querySelector(".start");
const header = document.querySelector('header');
const addBtn = document.querySelector('.addBtn');
const application = document.querySelector('.drugForm');
const inputValue = document.querySelectorAll('input[type=radio]');
const submitBtn = document.querySelector('.submitBtn');
const form = document.querySelector('.drugForm');
const medList = document.querySelector('.userMedications');
const reminderOptions = document.querySelector('.reminderOptions');
const nobutton = document.querySelector('#no');
const main = document.querySelector(".mainContainer");
const headerBtns = document.querySelector(".headerButtons")
let userInputArray = [];

function notifyMe(message) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(`Hi you have ${message} dose left`);
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(`Hi you have ${message} dose left`);
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }


startBtn.addEventListener('click', function (){
    main.classList.add("show");
    headerBtns.style.display = "none";
})

addBtn.addEventListener('click', formDisplay);

function formDisplay () {
    addBtn.classList.toggle('hide');
    application.classList.toggle('hide');
}

function checkBox (){
    inputValue.forEach(valueradio =>{
        valueradio.addEventListener('click', function(e){
            const id = e.target.value;
            if(id === "Yes"){
                reminderOptions.classList.remove('hide');
            } else if(id === "No"){
                reminderOptions.classList.add('hide');
            } else {
                reminderOptions.classList.add('hide');
            }
        })
    })
}

checkBox();

function addDrug (event){

    event.preventDefault();
    let userInput = {
        name: document.getElementById('name').value,
        milligrams: parseInt(document.getElementById("milligrams").value),
        doses: parseInt(document.getElementById("doses").value),
        alert: parseInt(document.getElementById("alerts").value),
        hours: parseInt(document.getElementById("hours").value)
    }
    userInputArray.push(userInput);
    // let userStorage = JSON.stringify(userInputArray);
    // localStorage.setItem("pillInfo", userStorage);
    // let userGetStorage = JSON.parse(localStorage.getItem("pillInfo"));
    // console.log(userGetStorage)

    form.reset();
    form.classList.toggle('hide');
    addBtn.classList.toggle('hide');
    const letters = /^[A-Za-z]+$/;
    const numbers = !/^[0-9]+$/;
    // const numbers = /![0-9]/;
    if(userInput.name.match(letters)){
        return medicationList();
    }
    else{
        alert("no numbers");
    }
}

function medicationList (){
    const drugInfo = document.createElement('div');
    userInputArray.forEach(input =>{
        const result = 100/input.doses;
            drugInfo.innerHTML = `<div class="drugInfo">
            <h3>${input.name}</h3>
            <p class="milli">${input.milligrams}</p>
            <p class="dose">${input.doses}</p>
            <div class="w3-light-grey">
            <div class="w3-grey"></div>
            </div>
            <button class="pillTaken">Pill Taken</button>
        </div>`
            let alertNotify = input.doses
            const change = drugInfo.querySelector('.w3-grey');
            change.style.width = result + '%';
            const millInput = drugInfo.querySelector('.milli');
            const doseInput = drugInfo.querySelector('.dose');
            const pillTaken = drugInfo.querySelector('.pillTaken');
            const calculate = ((input.milligrams) / (input.doses));
            let calculateMill = input.milligrams - calculate;
            pillTaken.addEventListener('click', function (){
                // let calculate = result) * input.milligrams
                // let resultChange = (calculate/100);
                // let total = ++resultChange;
                function subtract(xr){
                    let mill = ((calculate * (xr)) - (input.milligrams));
                    return (mill + input.milligrams);
                }
                function resultWidth(xr){
                    return 100/(xr)
                }
                if (input.doses < 1) input.doses = 1;
                doseInput.textContent = --input.doses;
                console.log(subtract(input.doses))
                millInput.textContent = subtract(input.doses)

                change.style.width = resultWidth(input.doses) + '%';
            })

        let x = input.alert;
            // const interval = 3600000;
        const interval = 1000;

        for (i = 0; i < x; i++) {
            setTimeout(function () {
                --alertNotify
                if (alertNotify < 0) alertNotify = 0;
                notifyMe(alertNotify)
                }, i * interval)
            }
        medList.appendChild(drugInfo);    
        })
    }

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', addDrug)
})
