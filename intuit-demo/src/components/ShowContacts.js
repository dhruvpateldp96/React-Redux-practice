import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Add as IconCreate } from 'styled-icons/material';
import Section from './Section';
import Row from './Row';
import Button from './Button';
import ContactsRow from './ContactsRow';
import Contact from './Contact';
import SearchBar from './SearchBar';

class ShowContacts extends Component {
  state = {
    filterText: '',
  };

  handleOpenCreate = () => {
    const { onOpenCreate } = this.props;

    onOpenCreate();
  };

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText,
    });
  }

  renderContacts = () => {
    const { filterText } = this.state;
    const { onOpenEdit, contacts } = this.props;
    const lowercaseFilterText = filterText.toLowerCase();
    const contactsRow = [];

    Object.keys(contacts).forEach((id) => {
      if (contacts[id].name.toLowerCase().indexOf(lowercaseFilterText) !== -1) {
        contactsRow.push((
          <Contact
            key={id}
            contactId={id}
            name={contacts[id].name}
            nickname={contacts[id].nickname}
            phone={contacts[id].phone}
            address={contacts[id].address}
            onOpenEdit={onOpenEdit}
          />
        ));
      }
    });

    const contactsList = (
      <ContactsRow>
        {[...contactsRow]}
      </ContactsRow>
    );

    return contactsList;
  };

  render() {
    const { filterText } = this.state;

    return (
      <Section>
        <Row right>
          <SearchBar
            text={filterText}
            onTextChange={this.handleFilterTextChange}
          />
          <Button primary onClick={this.handleOpenCreate}>
            <IconCreate size={16} title="Create contact" />
            {' '}
            Create
          </Button>
        </Row>
        {this.renderContacts()}
      </Section>
    );
  }
}

ShowContacts.propTypes = {
  onOpenCreate: PropTypes.func.isRequired,
  onOpenEdit: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
};

export default ShowContacts;
