import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: 100%;
  color: #000;
  background-color: #ddd;
  border: 1px solid #bbb;
  border-radius: 3px;
  font-size: 120%;

  @media (min-width: 992px) {
    width: 45%;
  }
`;

const SearchBar = ({
  onTextChange, text, children, ...props
}) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <Input
      type="text"
      name="search"
      aria-label="Search"
      placeholder="Search..."
      value={text}
      onChange={handleTextChange}
      {...props}
    >
      {children}
    </Input>
  );
};

SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SearchBar.defaultProps = {
  children: undefined,
};

export default SearchBar;
