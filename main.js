let event = [];
let arreglo = []; //se carga informacion

const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const buttonAdd = document.querySelector('#bAdd');
// sacar las referencias
const eventsContainer = document.querySelector('#eventsContainer');

//agregar un eventlistener
document.querySelector('form').addEventListener('submit' ,(e)=>{
e.preventDefault();
addEvent();

    
});

function addEvent(){
    if(eventName.value == "" || eventDate.value == ""){
        return
    }
    

}