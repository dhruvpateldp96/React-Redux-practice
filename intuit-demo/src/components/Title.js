import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 10px;
  max-width: 991px;
  flex: 1;
  color: #fff;
  font-size: 140%;
`;

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
