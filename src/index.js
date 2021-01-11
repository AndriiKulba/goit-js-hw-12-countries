import './styles.css';
import debounce from 'lodash.debounce';
import countryCardTpl from './templates/country-card.hbs';
import countriesCardTpl from './templates/countries-card.hbs';
import onFetchError from './js/pnotify';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;
  console.log(searchQuery);

  if (searchQuery === '') {
    return;
  }
  API.fetchCountries(searchQuery).then(renderCountriesCard);
}

function renderCountriesCard(result) {
  refs.cardContainer.innerHTML = '';
  const countElements = result.length;

  if (countElements === 1) {
    const markup = countryCardTpl(result);
    refs.cardContainer.innerHTML = markup;
  } else if (countElements >= 2 && countElements <= 10) {
    const markup = countriesCardTpl(result);
    refs.cardContainer.innerHTML = markup;
  } else if (countElements > 11) {
    onFetchError('Забагато результатів для видачі, введіть більш точну назву');
  }
}
