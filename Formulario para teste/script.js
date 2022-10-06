let Gamervalidation = {
  handleSubmit: (event)=>{
    event.preventDefault()
    let send = true;

    let inputs = form.querySelectorAll('input')

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = Gamervalidation.checkInput(input)
      if(check !== true) {
        send = false 
        console.log(check)// Exibir o error
        alert(check);
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
  }
};

let form = document.querySelector('.gamervalidador')
form.addEventListener('submit', Gamervalidation.handleSubmit) 