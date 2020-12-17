import debounced from 'lodash.debounce';
import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countriesCardTpl from './templates/countries-card.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  console.log(searchQuery);
  API.fetchCountries(searchQuery)
    .then(renderCountriesCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderCountriesCard(name) {
  const countElementsObj = Object.keys(name).length;
  console.log(countElementsObj);
  console.log(name);

  if (countElementsObj !== 1) {
    const markup1 = countriesCardTpl(name);

    refs.cardContainer.innerHTML = markup1;
  }
  const markup = countryCardTpl(name[0]);

  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
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
