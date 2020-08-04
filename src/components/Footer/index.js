import React from 'react';
import Button from '../Button';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <Button as={Link} to="/extra/formacoes-alura">
        Saiba mais sobre cursos na Alura
      </Button>
    </FooterBase>
  );
}

export default Footer;
