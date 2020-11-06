// Elementlar topildi 

var elCounterForm = document.querySelector('.counter-form');
var elShowResult = elCounterForm.querySelector('.show-result');
var elResultInfo = elCounterForm.querySelector('.result');

// Va formani submitiga quloq solindi 

elCounterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Input va Selectni valuelari bir o'zgaruvchiga saqlandi 

  var elCurrency = elCounterForm.querySelector('.currency-select').value;
  elCurrency = parseFloat(elCurrency, 10);
  var elCounterInput = elCounterForm.querySelector('.counter-input').value;
  var elCounterSum  = parseFloat(elCounterInput, 10);

  // Va input hamda selectni valuelari bir birga ko'paytirildi 

  // Va oxiri yani . dan kegin 2 honali son bo'sin deb checklandi 
  var counter = (elCounterInput * elCurrency).toFixed(2);

  // Va shartlar qo'yildi

  if (elCounterSum > 0) {
    elResultInfo.classList.add('alert');
    elResultInfo.classList.add('alert-success');
    elResultInfo.textContent = `${counter} so'm`;
    elResultInfo.classList.remove('alert');
    elResultInfo.classList.remove('alert-danger');
    elResultInfo.classList.remove('bg-transparent');
    elResultInfo.classList.remove('border-info');
    document.body.style.backgroundImage = "url('../img/dollars.png')";
    return;
  }

  if (elCounterSum < 1) {
    elResultInfo.textContent = `Iltimos 0 dan katta son kiriting!`;
    elResultInfo.classList.add('alert');
    elResultInfo.classList.add('alert-danger');
    return;
  }

  if (isNaN(elCounterSum)) {
    elResultInfo.textContent = `Summa kiritilmagan, iltmos kiriting!`;
    elResultInfo.classList.add('alert');
    elResultInfo.classList.add('alert-danger');
    return;
  }
});