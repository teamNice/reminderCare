const startBtn = document.querySelector('.startBtn');
const main = document.querySelector('main');
      const header = document.querySelector('header');
      const addBtn = document.querySelector('.addBtn');
      const application = document.querySelector('form');
      const inputValue = document.querySelectorAll('input').value;
      const submitBtn = document.querySelector('.submitBtn');
      const form = document.querySelector('form');
      const medList = document.querySelector('.userMedications');



    startBtn.addEventListener('click', function (){
        main.classList.add('show')
        header.style.display = "none";
    })

    addBtn.addEventListener('click', formDisplay)

    function formDisplay () {
        addBtn.classList.toggle('hide');
        application.classList.toggle('hide')

    }

    let userInputArray = [];

    function addDrug (event){
        event.preventDefault();
        let userInput = {
            name: document.getElementById('name').value,
            milligrams: document.getElementById('milligrams').value,
            doses: document.getElementById('doses').value
        }
        userInputArray.push(userInput);
        // console.log(userInputArray);
        form.reset();
        form.classList.toggle('hide');
        medicationList();
        addBtn.classList.toggle('hide');
    }
    
    function medicationList (){
    
        const drugForm = document.createElement('div');
        drugForm.innerHTML = `<div>
            <h3>${userInputArray[0].name}</h3>
        </div>`
        medList.appendChild(drugForm);
        }

    document.addEventListener('DOMContentLoaded', ()=>{
    submitBtn.addEventListener('click', addDrug)
    })
