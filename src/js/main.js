let title = document.getElementById('card__title');
let advice = document.getElementById('card__advice');

let button = document
  .getElementById('button')
  .addEventListener('click', getAdvice);

async function getAdvice() {
  const apiUrl = 'https://api.adviceslip.com/advice';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    title.innerText = `advice #${data.slip.id}`;
    advice.innerText = `“${data.slip.advice}”`;
  } catch (error) {
    console.log('Your error is: ', error);
  }
}

getAdvice();
