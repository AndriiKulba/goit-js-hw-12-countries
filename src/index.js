import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countriesCardTpl from './templates/countries-card.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';

const debounce = require('lodash.debounce');

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';

const refs = getRefs();
refs.searchForm.addEventListener('input', onSearch);
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  console.dir(debounce(a(e), 50000));
  function a(e) {
    console.log(e);
    const form = e.currentTarget;
    console.log(form);
    const searchQuery = form.elements.query.value;
    console.log(searchQuery);
    API.fetchCountries(searchQuery)
      .then(renderCountriesCard)
      .catch(onFetchError)
      .finally(() => form);
  }
}
// .finally(() => form.reset());
function renderCountriesCard(name) {
  const countElementsObj = Object.values(name).length;
  console.log(Object.values(name));

  if (countElementsObj === 1) {
    const markup = countryCardTpl(name);
    refs.cardContainer.innerHTML = markup;
  } else if ((countElementsObj >= 2) & (countElementsObj < 10)) {
    const markup = countriesCardTpl(name);
    refs.cardContainer.innerHTML = markup;
    const countriesItem = document.querySelectorAll('.list-group-item');
    console.log(countriesItem);
  }
}

function onFetchError(error) {
  defaultModules.set(PNotifyMobile, {});
  alert({
    text: 'Такой страны не найдено, введите более точный запрос',
  });
}

const _ = require('lodash');

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
