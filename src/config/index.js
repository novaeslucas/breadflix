const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://breadflix.herokuapp.com';

export default {
  URL_BACKEND,
};
