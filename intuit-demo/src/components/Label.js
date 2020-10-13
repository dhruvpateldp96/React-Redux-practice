import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin: 10px 0;
  width: 100%;
  flex: 1;
  font-size: 120%;
`;

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
