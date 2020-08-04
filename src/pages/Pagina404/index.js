import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Pagina404() {
  return (
    <PageDefault>
      <h1>
        Error 404
      </h1>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default Pagina404;
