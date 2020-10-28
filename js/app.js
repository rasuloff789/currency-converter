alert(`Assalomu alaykum, Karrupsiyaga qarshi kurashish agentligimizga xush kelibsiz brat))`)

var elShowResult = document.querySelector('.show-result');
var elResultInfo = document.querySelector('.result');

elShowResult.addEventListener('click', function (event) {
  event.preventDefault();

  var elCurrency = document.querySelector('.currency-select').value;
  elCurrency = parseFloat(elCurrency, 10);
  var elCounterInput = document.querySelector('.counter-input').value;
  var counter = elCounterInput * elCurrency;

  if (elCounterInput > 0) {
    elResultInfo.textContent = `${counter} so'm`;
  } else {
    elResultInfo.textContent = `Karrupsiyaga qarshi kurashish agentligimiz brat ))`
  }

})