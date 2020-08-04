import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormacaoItem from '../../../components/FormacaoItem';
import aluraFormacoes from '../../../repositories/aluraFormacoes';

const FormacoesAluraWrapper = styled.div``;

const TituloPagina = styled.h1`
  text-align: center;
`;

const FormacaoContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

function FormacoesAlura() {
  const [formacoes, setFormacoes] = useState([]);

  useEffect(() => {
    aluraFormacoes.getAll()
      .then((formacoesApi) => {
        setFormacoes(formacoesApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <FormacoesAluraWrapper>
        <TituloPagina>
          Quer aprender mais? Veja abaixo outros cursos agrupados por formação na Alura.
        </TituloPagina>

        <FormacaoContainer>
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('mobile'))}
            text="Mobile"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('programacao'))}
            text="Programação"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('front-end'))}
            text="Front-end"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('infraestrutura'))}
            text="Infraestrutura"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('design-ux'))}
            text="Design e UX"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('data-science'))}
            text="Data Science"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('marketing-digital'))}
            text="Marketing Digital"
          />
          <FormacaoItem
            arr={formacoes.filter((formacao) => formacao.categoryUrlName.includes('inovacao-gestao'))}
            text="Inovação e Gestão"
          />
        </FormacaoContainer>
      </FormacoesAluraWrapper>
    </PageDefault>
  );
}

export default FormacoesAlura;
