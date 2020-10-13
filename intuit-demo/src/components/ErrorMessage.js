import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
margin: 0 1rem 10px 1rem;;
max-width: 991px;
font-size: 100%;
color: red;
`;

const ErrorMessage = ({ children, ...props }) => (
  <StyledErrorMessage {...props}>
    {children}
  </StyledErrorMessage>
);

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ErrorMessage;
