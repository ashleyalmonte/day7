let x = document.getElementById('profileBtn')
let paras = document.getElementByClassName('para')
// function functionName() {}
function hideElement() {
  paras[3].classList.add('hidden')

}
// thisiscalled camelcase
//this_is_called snake_case


//takes two arguemnts: 1 this event, 2. the function to run when event happens
paras[0].addEventListener('click', hideElement)
