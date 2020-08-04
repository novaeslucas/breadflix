import config from '../config';

const URL_API_ALURA_FORMACOES = `${config.URL_API_ALURA}/formacoes`;

function getAll() {
  return fetch(URL_API_ALURA_FORMACOES)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi possível obter os dados.');
    });
}

export default {
  getAll,
};
