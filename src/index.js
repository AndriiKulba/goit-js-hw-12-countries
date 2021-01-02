import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countriesCardTpl from './templates/countries-card.hbs';
import onFetchError from './js/pnotify';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

const refs = getRefs();
refs.searchForm.addEventListener('input', onSearch);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const searchQuery = form.elements.query.value;
  console.log(searchQuery);
  API.fetchCountries(searchQuery)
    .then(renderCountriesCard)
    .catch(onFetchError)
    .finally(() => form);
}
// .finally(() => form.reset());
function renderCountriesCard(result) {
  console.log(result.length);
  const countElements = result.length;

  if (countElements === 1) {
    const markup = countryCardTpl(result);
    refs.cardContainer.innerHTML = markup;
  } else if ((countElements >= 2) & (countElements < 10)) {
    const markup = countriesCardTpl(result);
    refs.cardContainer.innerHTML = markup;
    const countriesItem = document.querySelectorAll('.list-group-item');
    console.log(countriesItem);
    countriesItem.addEventListener('click', countryCardTpl(result));
  }
}

// =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
