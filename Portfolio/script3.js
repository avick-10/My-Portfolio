const scriptURL = 'https://script.google.com/macros/s/AKfycby3mtRlYKIwarVaPsdHWCiPTXn-aIUsk4vlIVKfLRJRaZaiu0een88yYy81tT6ivQu0Sw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for contacting me..! I will contact you soon..."))
    .catch(error => console.error('Error!', error.message))
})