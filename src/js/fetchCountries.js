const countryUrl = 'https://restcountries.eu/rest/v2';

export default {
  fetchCountries(searchQuery) {
    return fetch(countryUrl + `/name/${searchQuery}`)
      .then(data => data.json())
      .catch(error => console.log(error));
  },
};
