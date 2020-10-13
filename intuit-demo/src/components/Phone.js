import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Phone as Icon } from 'styled-icons/material';

const StyledPhone = styled.p`
margin: 0;
color: #676a6c;
font-size: 100%;
`;

const Phone = ({ children, ...props }) => (
  <StyledPhone {...props}>
    <Icon size={16} title="Phone Number" />
    {' '}
    {children}
  </StyledPhone>
);

Phone.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Phone;
