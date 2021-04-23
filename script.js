const loginContainer = document.querySelector('.loginContainer');
const emailLogin = document.querySelector('.emailSignInContainer');
const loginBtn = document.querySelector('.loginBtn');
const startBtn = document.querySelector('.startBtn');
const main = document.querySelector('main');
const header = document.querySelector('header');
const addBtn = document.querySelector('.addBtn');
const application = document.querySelector('.drugForm');
const inputValue = document.querySelectorAll('input[type=radio]');
const submitBtn = document.querySelector('.submitBtn');
const form = document.querySelector('.drugForm');
const medList = document.querySelector('.userMedications');
const reminderOptions = document.querySelector('.reminderOptions');
const nobutton = document.querySelector('#no')
let userInputArray = [];

loginBtn.addEventListener('click', function(){
  emailLogin.classList.toggle('hide');
  loginContainer.classList.toggle('hide');
})

startBtn.addEventListener('click', function (){
    main.classList.add('show');
    header.style.display = "none";
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
        milligrams: document.getElementById('milligrams').value,
        doses: document.getElementById('doses').value,
        // alert: document.getElementById('alerts').value,
        // hours: document.getElementById('hours').value,
    }
    userInputArray.push(userInput);
    // console.log(userInputArray);
    form.reset();
    form.classList.toggle('hide');
    medicationList();
    addBtn.classList.toggle('hide');
}

function medicationList (){
    const drugInfo = document.createElement('div');
    userInputArray.forEach(input =>{
        drugInfo.innerHTML = `<div>
        <h3>${input.name}</h3>
        <p>${input.milligrams}</p>
        <p>${input.doses}</p>
    </div>`
    })
   
    medList.appendChild(drugInfo);
}

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', addDrug)
})
