var elShowResult = document.querySelector('.show-result');
var elResultInfo = document.querySelector('.result');

elShowResult.addEventListener('click', function (event) {
  event.preventDefault();

  var elCurrency = document.querySelector('.currency-select').value;
  var elCounterInput = document.querySelector('.counter-input').value;
  var counter = elCounterInput * elCurrency;

  if (elCounterInput > 0) {
    elResultInfo.textContent = `${counter} so'm`;
  } else {
    elResultInfo.textContent = `Karrupsiyaga qarshi kurashish agentligimiz birodar ))`
  }

})