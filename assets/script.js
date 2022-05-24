const emailRegex = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const phoneRegex = /^\s*\+?\s*([0-9][\s-]*){8,}$/

function formValidation(formInput){
     //Telefonnummer
    if (!formInput.phonenumber.value) {
        showError(formInput.phonenumber, "Du skal indtaste dit telefonnummer" )
    } else {
        if(!formInput.phonenumber.value.match(phoneRegex)){
            showError(formInput.phonenumber, "Telefonnummer er for kort eller har bogstaver")
        }
    }
    
    //Email
    if (!formInput.email.value){
        showError(formInput.email, "Du skal indtaste din email i feltet")
    } else {
        if(!formInput.email.value.match(emailRegex)){
            showError(formInput.email, "Du har indtastet din email forkert")
        }
    }

    //Textarea
    if (!formInput.comment.value) {
        showError(formInput.comment, "Du skal indtaste en ordre eller en booking")
        
    }
    }




    function showError(error, strMessage){
        error.classList.add('border-error')
            if (!error.nextElementSibling) {
                error.insertAdjacentHTML('afterend', `<span class='error-text'>${strMessage}</span`) //Her bruger jeg en template literal med to backticks og laver jeg en string interpolation og trækker værdien over.
                    error.addEventListener("keypress", function(){
                        error.classList.remove('border-error')
                        if(error.nextElementSibling){
                            error.nextElementSibling.remove();
                        }
                    })
            }
    
    }