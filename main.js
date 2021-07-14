var mainApp = {};
const logoutBtn = document.querySelector('.logoutBtn');
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

(function (){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        let userInput = {
            name: document.getElementById('name').value,
            milligrams: parseInt(document.getElementById("milligrams").value),
            doses: parseInt(document.getElementById("doses").value),
            alert: parseInt(document.getElementById("alerts").value),
            hours: parseInt(document.getElementById("hours").value)
        }
        userInputArray.push(userInput);
        let userStorage = JSON.stringify(userInputArray);
        localStorage.setItem("pillInfo", userStorage);
        let userGetStorage = JSON.parse(localStorage.getItem("pillInfo"));
        console.log(userGetStorage)
          // User is signed in.
          uid = user.id;
        } else{
            uid = null;
            window.location.replace("login.html")
        }
      });
      function logOut (){
          firebase.auth().signOut();
      }
      
      mainApp.logOut = logOut;

      logoutBtn.addEventListener('click', function(){
        mainApp.logOut();
      })

})();