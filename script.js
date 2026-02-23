console.log("JavaScript loaded");
function darkmode() {
    console.log("function was toggled");
   var element = document.body;
   element.classList.toggle("darkmode");
   
}


function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get('email');

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);