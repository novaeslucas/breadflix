import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormacaoItemCard = styled.div`
  background-color: #222831;
  height: 37rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
`;

const FormacaoItemTitulo = styled.div`
    padding: 2px 16px;
`;

const FormacaoItemContainer = styled.div`
    padding: 2px 16px;
    text-align: center;
`;

const Item = styled.div`
    padding: 5px 5px;
`;

function FormacaoItem({ arr, text }) {
  return (
    <FormacaoItemCard>
      <FormacaoItemTitulo>
        <h3>
          Formação em
          {' '}
          {text}
        </h3>
      </FormacaoItemTitulo>
      <FormacaoItemContainer>
        {arr.map((filteredFormacao) => (
          <Item key={`${filteredFormacao.id}`}>
            <a href={`https://www.alura.com.br/formacao-${filteredFormacao.code}`}>
              {filteredFormacao.title}
            </a>
          </Item>
        ))}
      </FormacaoItemContainer>
    </FormacaoItemCard>
  );
}

FormacaoItem.defaultProps = {
  arr: [],
  text: '',
};

FormacaoItem.propTypes = {
  arr: PropTypes.instanceOf(Array),
  text: PropTypes.string,
};

export default FormacaoItem;
