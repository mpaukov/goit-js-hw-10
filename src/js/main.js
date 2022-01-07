import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

fetchCountries('peru')
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
