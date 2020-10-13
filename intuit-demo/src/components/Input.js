import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: 100%;
  color: #000;
  background-color: #ddd;
  border: 1px solid #bbb;
  border-radius: 3px;

  ${({ disabled }) => disabled && css`
    background-color: #f3f3f4;
    border: none;
  `}
`;

const Input = ({ children, ...props }) => (
  <StyledInput {...props}>
    {children}
  </StyledInput>
);

Input.propTypes = {
  children: PropTypes.node,
};

Input.defaultProps = {
  children: undefined,
};

export default Input;
