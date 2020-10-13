import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 0 1rem;
  width: 100%;
  background-color: #1482c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(
    -45deg,
    #606dbc,
    #606dbc 10px,
    #1482c1 10px,
    #1482c1 20px
  );
`;

const Header = ({ children, ...props }) => (
  <StyledHeader {...props}>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
