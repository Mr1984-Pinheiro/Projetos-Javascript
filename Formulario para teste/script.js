let Gamervalidation = {
  handleSubmit: (event)=>{
    event.preventDefault()
    let send = true;

    let inputs = form.querySelectorAll('input')

    Gamervalidation.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = Gamervalidation.checkInput(input)
      if(check !== true) {
        send = false 
       // Exibir o error
        Gamervalidation.showError(input, check);
      }
      
    }
    
    if(send) {
      form.submit()
    }

  },

  checkInput:(input) => {
    let rules = input.getAttribute('data-rules');

    if(rules !== null) {
      rules = rules.split('|');
      for(let k in rules) {
        let rDetails = rules[k].split('=');
        switch (rDetails[0]) {
          case 'required':
                if(input.value == '') {
                  return 'Campo não pode ser vazio.';
                }
            break;
            case 'min':
        
          default:
            break;
        }
      }
    }
    return true;
  },

  showError: (input, error) => {
      input.style.borderColor = '#FF0000';

      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;

      input.parentElement.insertBefore(errorElement, input.ElementSibling);
  },

  clearErrors: ()=> {

    let noStyle = form.querySelectorAll('input');
    for(let i=0; i<noStyle.length; i++){
      noStyle[i].style = '';
    };

    let errorElements = document.querySelectorAll('.error');
    for(let i=0; i<errorElements.length; i++) {
      errorElements[i].remove();
    }
  }
};

let form = document.querySelector('.gamervalidador')
form.addEventListener('submit', Gamervalidation.handleSubmit) 