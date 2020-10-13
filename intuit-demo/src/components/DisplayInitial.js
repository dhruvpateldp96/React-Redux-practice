import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDisplayInitial = styled.div`
margin: 0;
background-color: #60c356;
background: repeating-linear-gradient(
  45deg,
  #64cc5a,
  #64cc5a 10px,
  #60c356 10px,
  #60c356 20px
);
display: flex;
flex: 0 0 64px;
width: 64px;
height: 64px;
border-radius: 50%;
font-size: 200%;
color: white;
text-shadow: 2px 2px 6px #333;
align-items: center;
justify-content: center;
`;

const DisplayInitial = ({ children, ...props }) => (
  <StyledDisplayInitial {...props}>
    {children}
  </StyledDisplayInitial>
);

DisplayInitial.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisplayInitial;
