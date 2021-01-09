import onFetchError from './pnotify';
const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  const url = `${BASE_URL}/name/${searchQuery}`;
  return fetch(url)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Error');
    })
    .catch(error => {
      onFetchError('Такої країни не найдено, введіть більш точну назву');
      return error;
    });
}

export default { fetchCountries };
