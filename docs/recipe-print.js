function openRecipeDetailsForPrint() {
  document.querySelectorAll('.recipe-page-card details').forEach(function (detail) {
    detail.setAttribute('open', 'open');
  });
}

function printRecipeCard() {
  openRecipeDetailsForPrint();
  window.print();
}

window.addEventListener('beforeprint', openRecipeDetailsForPrint);
