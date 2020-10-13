import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInformation = styled.div`
margin-left: 18px;
padding: 12px;
flex: 1;
`;

const Information = ({ children, ...props }) => (
  <StyledInformation {...props}>
    {children}
  </StyledInformation>
);

Information.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Information;
