import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledRow = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ right }) => right && css`
    justify-content: center;
    align-items: flex-end;
  `}

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    ${({ right }) => right && css`
      justify-content: flex-end;
      align-items: center;
    `}
  }
`;

const Row = ({ children, ...props }) => (
  <StyledRow {...props}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
