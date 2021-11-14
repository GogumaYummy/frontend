import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/style/colors';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${colors.gray[8]};
  &:hover {
    background: ${colors.gray[6]};
  }
`;

function Button(props: any) {
  return <StyledButton {...props} />;
}

export default Button;
