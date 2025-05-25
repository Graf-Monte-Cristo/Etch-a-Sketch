const container = document.getElementById("main-container");

const slider = document.getElementById('grid-slider');
const display = document.getElementById('grid-value');
slider.addEventListener('input', e => {
  const variable = +e.target.value;
  display.textContent = variable;
  // Станет 16 или 12, или любое другое
  document.documentElement.style.setProperty('--grid-size', variable);

  // ! Вот эта строка убирает все старые квадратики
  container.innerHTML = '';

  // А затем создаём ровно variable*variable новых
  for (let i = 0; i < variable * variable; i++) {
    const block = document.createElement("div");
    block.classList.add("block-style");
    container.appendChild(block);
  }
});
container.addEventListener('mouseover', e => {
    let div = e.target.closest('.block-style');
    if (!div) {return;}
    div.style.backgroundColor = 'dimgrey';
});


