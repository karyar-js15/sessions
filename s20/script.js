/* Web API */
/* 
    - Working With Forms
*/

let formElements = document.forms;
let registerFormElem = formElements.registerForm
let firstNameInputElem = registerFormElem.firstName
let countryElem = registerFormElem.country;

let firstName = '';

let values = {
    firstName: '',
    email: '',
    password: '',
    age: null,
    country: 'ir',
    gender: null,
    skills: []
}

// firstNameInputElem.addEventListener('change', (event) => {
//     console.log('Change', event.target.value)
//     firstName = event.target.value;
// })

// firstNameInputElem.addEventListener('input', (event) => {
//     console.log('Input', event.target.value)
// })

// countryElem.addEventListener('change', (event) => {
//     // console.dir(event)
//     // console.log('Change', event.target.value)
//     const selectedOptions = event.target.selectedOptions;
//     const selectedCountries = []

//     for(let i = 0; i < selectedOptions.length; i++) {
//         let selectedOptionValue = selectedOptions.item(i).value;
//         selectedCountries.push(selectedOptionValue);
//     }

//     console.log(selectedCountries)
//     // firstName = event.target.value;
// })


// registerFormElem.addEventListener('change', (event) => {
//     console.log('Form Event')
//     console.dir(event)
// })

registerFormElem.addEventListener('submit', (event) => {
    event.preventDefault();
    

    const formElem = event.target;
    let names = Object.keys(values);
    names.forEach((name) => {
        // console.log(formElem[name])
        let fieldElem = formElem[name]
        if (fieldElem.tagName === 'INPUT') {
            values[name] = getInputValue(fieldElem)
        } else if (fieldElem.tagName === 'SELECT') {
            values[name] = getSelectValue(fieldElem)
        } else if (fieldElem instanceof RadioNodeList) {
            values[name] = getRadioNodeListValue(fieldElem)
        }
    })

    const hasFormError = hasError();
    
    if(!hasFormError) {
        document.querySelector('.form__error').remove();
        console.log('Form Submitted Successfully')
        console.log(values)
        return;
    }


    let errorElem = document.createElement('p');
    errorElem.classList.add('form__error')
    errorElem.append('Form has error.')
    formElem.append(errorElem)

    // console.log('Form is Submitting')
    // console.dir(event)
})


function getInputValue(elem) {
    return elem.value;
}

function getSelectValue(elem) {
    if (elem.getAttribute('multiple')) {
        return null;
    }

    return elem.value;
}

function getRadioNodeListValue(radioNodeList) {
    if (radioNodeList.length === 0) {
        return null
    }

    let isRadio = radioNodeList.item(0).type === 'radio';

    if (isRadio) {
        return radioNodeList.value
    }

    // it is checkbox
    let checkedValues = Array.from(radioNodeList)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) =>  checkbox.value)

    return checkedValues;
}

function hasError() {
    let isPasswordError = !values.password || values.password.length < 5
    let isCountrySkillError = (
        values.country === 'om' && !values.skills.includes('html')
    )

    return isPasswordError || isCountrySkillError
}




// formElements.namedItme('...')
// formElements['registerForm']
// querySelector, getElementById, ...
