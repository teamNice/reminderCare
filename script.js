const startBtn = document.querySelector('.startBtn');
const main = document.querySelector('main');
      const header = document.querySelector('header');
      const addBtn = document.querySelector('.addBtn');
      const application = document.querySelector('form');
      const inputValue = document.querySelectorAll('input').value;
      const submitBtn = document.querySelector('.submitBtn');
      const form = document.querySelector('form')



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
            milligrams: document.getElementById('milligrams').value
        }
        userInputArray.push(userInput);
        // console.log(userInputArray);
        form.reset();
    }

    document.addEventListener('DOMContentLoaded', ()=>{
    submitBtn.addEventListener('click', addDrug)
    })


    //   function createDrugForm (){

    //     const form = document.createElement('div');
    //     // form.innerHTML = ``
    //                 document.getElementById('pillBoard').appendChild(form);

    //   }
