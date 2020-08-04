const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://breadflix.herokuapp.com';

const URL_API_ALURA = 'https://www.alura.com.br/api';

export default {
  URL_BACKEND,
  URL_API_ALURA,
};
