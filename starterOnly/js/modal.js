function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');

const messagebg = document.querySelector('.mbground');
const submitBtn = document.querySelectorAll('.btn-submit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Success message

function openMessageModal() {
  messagebg.style.display = 'block';
}

function closeMessageModal() {
  messagebg.style.display = 'none';
}

function clearErrorMessages(form) {
  form.first.parentElement.removeAttribute('data-error-visible');
  form.last.parentElement.removeAttribute('data-error-visible');
  form.email.parentElement.removeAttribute('data-error-visible');
  form.birthdate.parentElement.removeAttribute('data-error-visible');
  form.quantity.parentElement.removeAttribute('data-error-visible');
  form.location[0].parentElement.removeAttribute('data-error-visible');
  form.checkbox1.parentElement.removeAttribute('data-error-visible');
}

// Fonction form validate

function validate(form) {
  clearErrorMessages(form);
  let valideOk = true;

  if (form.first.value.length < 2) {
    form.first.parentElement.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du Prénom'
    );
    form.first.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  if (form.last.value.length < 2) {
    form.last.parentElement.setAttribute(
      'data-error',
      'Veuillez entrer 2 caractères ou plus pour le champ du Nom'
    );
    form.last.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  if (!re.test(form.email.value)) {
    form.email.parentElement.setAttribute(
      'data-error',
      'Veuillez entrer une adresse email valide'
    );
    form.email.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  if (form.birthdate.value == '') {
    form.birthdate.parentElement.setAttribute(
      'data-error',
      'Veuillez entrer votre date de naissance'
    );
    form.birthdate.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  const quantity = parseInt(form.quantity.value);

  if (
    isNaN(quantity) ||
    quantity != form.quantity.value ||
    quantity < 1 ||
    quantity > 99
  ) {
    form.quantity.parentElement.setAttribute(
      'data-error',
      'Veuillez choisir une option'
    );
    form.quantity.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  if (form.location.value == '') {
    form.location[0].parentElement.setAttribute(
      'data-error',
      'Veuillez choisir une option'
    );
    form.location[0].parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  if (form.checkbox1.checked == false) {
    form.checkbox1.parentElement.setAttribute(
      'data-error',
      'Veuillez accepter les CGU'
    );
    form.checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    valideOk = false;
  }

  if (valideOk == true) {
    closeFormModal();
    openMessageModal();
    form.reset();
    clearErrorMessages(form);
  }

  return false;
}

function closeFormModal() {
  document.getElementById('closeModal').style.display = 'none';
}
