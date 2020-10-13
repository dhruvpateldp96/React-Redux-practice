import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContactsRow = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &:first-child {
    margin-top: 10px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
`;

const ContactsRow = ({ children, ...props }) => (
  <StyledContactsRow {...props}>
    {children}
  </StyledContactsRow>
);

ContactsRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsRow;
