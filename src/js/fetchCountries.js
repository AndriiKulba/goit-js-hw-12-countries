import onFetchError from './pnotify';
const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  const url = `${BASE_URL}/name/${searchQuery}`;
  return fetch(url)
    .then(res => {
      console.log(res);
      if (res.ok) return res.json();
      throw new Error('Error');
    })
    .catch(error => {
      onFetchError('Такой страны не найдено, введите более точный запрос');
      return error;
    });
}

export default { fetchCountries };
